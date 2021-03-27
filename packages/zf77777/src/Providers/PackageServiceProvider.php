<?php

namespace Packages\Zf77777\Providers;

// use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Support\ServiceProvider;
// use Packages\Zf77777\Console\Commands\CompleteDeposits;
// use Packages\Zf77777\Console\Commands\SendWithdrawals;

class PackageServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $packageBaseDir = __DIR__ . '/../../';
        // load migrations
        // $this->loadMigrationsFrom($packageBaseDir . 'database/migrations');
        // load routes
        // $this->loadRoutesFrom($packageBaseDir . 'routes/api.php');

        // register commands and schedules
        // if ($this->app->runningInConsole()) {
            // $this->commands([
            //     CompleteDeposits::class,
            //     SendWithdrawals::class
            // ]);

            // $this->app->booted(function () {
            //     $schedule = $this->app->make(Schedule::class);
            //     $schedule->command('deposits:complete')->everyMinute();
            //     $schedule->command('withdrawals:send')->everyFiveMinutes();
            // });
        // }
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $packageBaseDir = __DIR__ . '/../../';
        // load package config
        $this->mergeConfigFrom(
            $packageBaseDir . 'config/config.php', 'zf77777'
        );

        // register package event service provider
        // $this->app->register(EventServiceProvider::class);
    }
}
