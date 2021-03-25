<?php

Route::name('payments.')
    ->prefix('api')
    ->namespace('Packages\Payments\Http\Controllers')
    ->middleware(['api', 'auth:sanctum', 'verified', 'active', '2fa'])
    ->group(function () {
        // deposits
        Route::get('deposits', 'DepositController@index');
        Route::get('deposits/{deposit}', 'DepositController@show');
        Route::post('deposits/methods/{depositMethod}', 'DepositController@store')->middleware('concurrent');
        Route::patch('deposits/methods/{depositMethod}/{deposit}', 'DepositController@update')->middleware('concurrent');
        // withdrawals
        Route::get('withdrawals', 'WithdrawalController@index');
        Route::post('withdrawals/methods/{withdrawalMethod}', 'WithdrawalController@store')->middleware('concurrent');
        // deposit methods
        Route::get('deposit-methods', 'DepositMethodController@index');
        // withdrawal methods
        Route::get('withdrawal-methods', 'WithdrawalMethodController@index');
        // ethereum
        Route::get('ethereum/addresses', 'EthereumController@index');
        Route::post('ethereum/addresses', 'EthereumController@store')->middleware('concurrent');
        Route::post('ethereum/addresses/{ethereumAddress}/verify', 'EthereumController@verify')->middleware('concurrent');
        // tron
        Route::get('tron/addresses', 'TronController@index');
        Route::post('tron/addresses', 'TronController@store')->middleware('concurrent');
        Route::post('tron/addresses/{tronAddress}/verify', 'TronController@verify')->middleware('concurrent');
    });

Route::name('payments.')
    ->prefix('api')
    ->namespace('Packages\Payments\Http\Controllers')
    ->middleware(['api'])
    ->group(function () {
        // webhooks / IPN
        Route::get('webhooks/deposit-methods/{depositMethod}/complete', 'WebhookController@completeDeposit')->name('webhooks.deposits.complete');
        Route::get('webhooks/deposit-methods/{depositMethod}/cancel', 'WebhookController@cancelDeposit')->name('webhooks.deposits.cancel');
        Route::post('webhooks/deposit-methods/{depositMethod}/ipn', 'WebhookController@ipnDeposit')->name('webhooks.deposits.ipn');
        Route::post('webhooks/withdrawal-methods/{withdrawalMethod}/ipn', 'WebhookController@ipnWithdrawal')->name('webhooks.withdrawals.ipn');
    });

// ADMIN ROUTES
Route::namespace('Packages\Payments\Http\Controllers\Admin')
    ->name('admin.')
    ->prefix('api/admin')
    ->middleware(['api', 'auth:sanctum', 'verified', 'active', '2fa', 'role:' . App\Models\User::ROLE_ADMIN])
    ->group(function () {
        // dashboard
        Route::get('dashboard/payments/data/{key}', 'DashboardController@getData');
        // deposits
        Route::get('deposits', 'DepositController@index');
        Route::get('deposits/{deposit}', 'DepositController@show');
        Route::get('deposits/{deposit}/transaction', 'DepositController@transaction');
        Route::post('deposits/{deposit}/cancel', 'DepositController@cancel');
        Route::post('deposits/{deposit}/complete', 'DepositController@complete');
        // withdrawals
        Route::get('withdrawals', 'WithdrawalController@index');
        Route::get('withdrawals/{withdrawal}', 'WithdrawalController@show');
        Route::patch('withdrawals/{withdrawal}', 'WithdrawalController@update');
        Route::get('withdrawals/{withdrawal}/transaction', 'WithdrawalController@transaction');
        Route::post('withdrawals/{withdrawal}/send', 'WithdrawalController@send');
        Route::post('withdrawals/{withdrawal}/cancel', 'WithdrawalController@cancel');
        Route::post('withdrawals/{withdrawal}/complete', 'WithdrawalController@complete');
        // payment gateways
        Route::get('payment-gateways', 'PaymentGatewayController@index');
        // deposit methods
        Route::get('deposit-methods', 'DepositMethodController@index');
        Route::post('deposit-methods', 'DepositMethodController@store');
        Route::get('deposit-methods/{depositMethod}', 'DepositMethodController@show');
        Route::get('deposit-methods/{depositMethod}/info', 'DepositMethodController@info');
        Route::get('deposit-methods/{depositMethod}/balance', 'DepositMethodController@balance');
        Route::patch('deposit-methods/{depositMethod}', 'DepositMethodController@update')->name('deposit-methods.update');
        Route::delete('deposit-methods/{depositMethod}', 'DepositMethodController@destroy');
        // withdrawals methods
        Route::get('withdrawal-methods', 'WithdrawalMethodController@index');
        Route::post('withdrawal-methods', 'WithdrawalMethodController@store');
        Route::get('withdrawal-methods/{withdrawalMethod}', 'WithdrawalMethodController@show');
        Route::get('withdrawal-methods/{withdrawalMethod}/info', 'WithdrawalMethodController@info');
        Route::get('withdrawal-methods/{withdrawalMethod}/balance', 'WithdrawalMethodController@balance');
        Route::patch('withdrawal-methods/{withdrawalMethod}', 'WithdrawalMethodController@update')->name('withdrawal-methods.update');
        Route::delete('withdrawal-methods/{withdrawalMethod}', 'WithdrawalMethodController@destroy');
    });
