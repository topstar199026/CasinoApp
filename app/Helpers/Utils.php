<?php

namespace App\Helpers;

use Exception;
use Illuminate\Support\Facades\Cache;
use ReflectionClass;

class Utils
{
    public static function assert ($class, $hash, $cb)
    {
        try {
            return Cache::remember('hash_' . class_basename($class), 300, function () use ($class, $hash) {
                return sha1(preg_replace('#\s+#', '', file_get_contents((new ReflectionClass($class))->getFileName()))) == $hash;
            }) ?: $cb();
        } catch (Exception $e) {
            //
        }
    }
}
