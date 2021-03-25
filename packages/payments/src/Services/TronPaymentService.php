<?php

namespace Packages\Payments\Services;

use Omnipay\Omnipay;
use Packages\Payments\Helpers\Tron;

class TronPaymentService extends PaymentService
{
    protected $omnipay;
    protected $amount;
    protected $addressFrom;
    protected $addressTo;

    private $isRedirect = FALSE;

    protected function init()
    {
        $this->omnipay = Omnipay::create('Trongrid');

        $this->omnipay->initialize([
            'network' => config('payments.tron.network')
        ]);
    }

    public function createDeposit(array $params): PaymentService
    {
        $this->amount = $params['amount'];
        $this->addressFrom = $params['parameters']['address'];
        $this->addressTo = $this->getDepositAddress();
        $this->isRedirect = TRUE;

        return $this;
    }

    public function completeDeposit(array $params): PaymentService
    {
        return $this;
    }

    public function getPaymentAmount(): float
    {
        return $this->amount / $this->getMethodRate();
    }

    public function getPaymentCurrency(): string
    {
        return $this->getMethodCurrency();
    }

    public function getDepositParameters(array $request): ?array
    {
        $params = $request['parameters'];
        $params['addressFrom'] = $request['parameters']['address'];
        $params['addressTo'] = $this->getDepositAddress();
        unset($params['address']);

        if ($this->isTrc20Token()) {
            $params['contractAddress'] = $this->getTrc20TokenContractAddress();
            $params['contractDecimals'] = $this->getTrc20TokenContractDecimals();
        }

        return $params;
    }

    public function getWithdrawalParameters(array $request): ?array
    {
        $params = $request['parameters'];

        if ($this->isTrc20Token()) {
            $params['contractAddress'] = $this->getTrc20TokenContractAddress();
            $params['contractDecimals'] = $this->getTrc20TokenContractDecimals();
        }

        return $params;
    }

    /**
     * Get balance of a given Tron or TRC20 address
     *
     * @param string $address
     * @return PaymentService
     */
    public function fetchAddressBalance(string $address): float
    {
        if ($this->isTrc20Token()) {
            // there is no way to retrieve balance in TRC20 tokens at the moment
            return PHP_INT_MAX;
        } else {
            $this->response = $this->omnipay->fetchBalance(['address' => $address])->send();

            if ($this->isResponseSuccessful()) {
                $balance = $this->getResponseData();

                // convert balance to decimal, because it's provided in sun
                return Tron::fromSun($balance);
            }
        }
    }

    public function fetchTransaction(string $transactionId)
    {
        $this->response = $this->omnipay->fetchTransaction(['transaction_id' => $transactionId])->send();

        return $this->isResponseSuccessful() ? $this->getResponseData() : NULL;
    }

    public function isResponseRedirect()
    {
        return $this->isRedirect ?: parent::isResponseRedirect();
    }

    public function getRedirectUrl(): string
    {
        return 'user.account.deposits.complete';
    }

    public function isExternalRedirect(): bool
    {
        return FALSE;
    }

    public function getTransactionReferenceParameterName(): string
    {
        return '';
    }

    public function getTransactionReference(): string
    {
        return '';
    }

    public function getCompletePaymentParameters(): array
    {
        return [];
    }

    public function getCancelPaymentParameters(): array
    {
        return [];
    }

    public function isTrc20Token()
    {
        return $this->getPaymentGatewayMethod()->code == 'trc20';
    }

    public function getDepositAddress()
    {
        return $this->getMethod()->payment_method_parameters->address ?? NULL;
    }

    public function getDecimals()
    {
        return $this->isTrc20Token() ? $this->getTrc20TokenContractDecimals() : 18;
    }

    public function getTrc20TokenContractAddress()
    {
        return $this->getMethod()->payment_method_parameters->contract_address ?? NULL;
    }

    public function getTrc20TokenContractDecimals()
    {
        return (int) $this->getMethod()->payment_method_parameters->contract_decimals ?? NULL;
    }
}
