<?php

namespace Packages\Payments\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Packages\Payments\Helpers\Tron;
use Packages\Payments\Http\Requests\StoreTronAddress;
use Packages\Payments\Http\Requests\VerifyTronAddress;
use Packages\Payments\Models\TronAddress;

class TronController extends Controller
{
    public function index(Request $request)
    {
        return TronAddress::where('user_id', $request->user()->id)->confirmed()->get();
    }

    /**
     * Create or update an ethereum address
     *
     * @param StoreTronAddress $request
     * @return mixed
     */
    public function store(StoreTronAddress $request)
    {
        return TronAddress::updateOrCreate(
            ['user_id' => $request->user()->id, 'address' => $request->address],
            ['message' => Str::random(20)]
        );
    }

    /**
     * Verify ethereum signtarure to confirm a given address belongs to user
     *
     * @param VerifyTronAddress $request
     * @param TronAddress $tronAddress
     * @return TronAddress
     */
    public function verify(VerifyTronAddress $request, TronAddress $tronAddress)
    {
        if (Tron::isSignatureValid($tronAddress->message, $request->signature, $tronAddress->address)) {
            $tronAddress->update(['confirmed' => TRUE]);
        }

        return $tronAddress;
    }
}
