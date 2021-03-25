<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    protected $scheduledCommands = [
        'delete:game-rooms' => 'daily',
        'delete:unused-pf-games' => 'daily',
//        'validate' => 'weekly'
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // Bots
        $frequencyMethod = config('settings.bots.games.frequency');
        $schedule->command('create:games')->$frequencyMethod();

        // affiliate commissions
        if (config('settings.affiliate.auto_approval_frequency') == 'daily') {
            $schedule->command('commissions:approve')->dailyAt('00:00');
        } elseif (config('settings.affiliate.auto_approval_frequency') == 'weekly') {
            $schedule->command('commissions:approve')->weeklyOn(1, '00:00');
        } elseif (config('settings.affiliate.auto_approval_frequency') == 'monthly') {
            $schedule->command('commissions:approve')->monthlyOn(1, '00:00');
        }

        collect($this->scheduledCommands)->each(function ($frequency, $command) use ($schedule) {
            $schedule->command($command)->$frequency();
        });
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
