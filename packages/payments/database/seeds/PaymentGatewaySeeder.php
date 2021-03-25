<?php

use Illuminate\Database\Seeder;
use Packages\Payments\Models\PaymentGateway;

class PaymentGatewaySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PaymentGateway::firstOrCreate(['code' => 'paypal'], ['name' => 'PayPal']);

        PaymentGateway::firstOrCreate(['code' => 'stripe'], ['name' => 'Stripe']);

        PaymentGateway::firstOrCreate(['code' => 'coinpayments'], ['name' => 'Coinpayments']);

        PaymentGateway::firstOrCreate(['code' => 'ethereum'], ['name' => 'Ethereum']);

        PaymentGateway::firstOrCreate(['code' => 'tron'], ['name' => 'Tron']);
    }
}
