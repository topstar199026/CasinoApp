<?php

namespace Packages\Payments\Services;

use Omnipay\Omnipay;

class Zf77777PaymentService extends PaymentService
{
    protected $omnipay;

    protected function init()
    {
        $this->omnipay = Omnipay::create('Zf77777');

        $this->omnipay->initialize([
            'user_id'  => config('payments.zf77777.user_id'),
            'notifyurl'  => config('payments.zf77777.notifyurl'),
            'returnurl' => config('payments.zf77777.returnurl'),
            'sign'  => config('payments.zf77777.sign'),
        ]);
    }

    public function createDeposit(array $params): PaymentService
    {
        $params = [
            'amount'        => round($params['amount'] / $this->getMethodRate(), 2),
            'currency'      => $this->getMethodCurrency(),
            'description'   => $this->getDepositDescription(),
            'returnUrl'     => $this->getDepositReturnUrl(),
            'cancelUrl'     => $this->getDepositCancelUrl(),
        ];

        $this->response = $this->omnipay->purchase($params)->send();

        return $this;
    }

    public function completeDeposit(array $params): PaymentService
    {
        $this->response = $this->omnipay->completePurchase($params)->send();

        return $this;
    }

    public function getTransactionReferenceParameterName(): string
    {
        return 'token';
    }

    public function getTransactionReference(): string
    {
        return $this->response->getTransactionReference();
    }

    public function getCompletePaymentParameters(): array
    {
        return ['token', 'PayerID'];
    }

    public function getCancelPaymentParameters(): array
    {
        return ['token'];
    }
}
