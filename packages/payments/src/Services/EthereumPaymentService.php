<?php

namespace Packages\Payments\Services;

use Omnipay\Omnipay;
use Packages\Payments\Helpers\Ethereum;

class EthereumPaymentService extends PaymentService
{
    protected $omnipay;
    protected $amount;
    protected $addressFrom;
    protected $addressTo;

    private $isRedirect = FALSE;

    protected function init()
    {
        $this->omnipay = Omnipay::create('Etherscan');

        $this->omnipay->initialize([
            'api_key' => config('payments.ethereum.api_key'),
            'network' => config('payments.ethereum.network')
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

        if ($this->isErc20Token()) {
            $params['contractAddress'] = $this->getErc20TokenContractAddress();
            $params['contractDecimals'] = $this->getErc20TokenContractDecimals();
        }

        return $params;
    }

    public function getWithdrawalParameters(array $request): ?array
    {
        $params = $request['parameters'];

        if ($this->isErc20Token()) {
            $params['contractAddress'] = $this->getErc20TokenContractAddress();
            $params['contractDecimals'] = $this->getErc20TokenContractDecimals();
        }

        return $params;
    }

    /**
     * Get balance of a given Ethereum or ERC20 address
     *
     * @param string $address
     * @return PaymentService
     */
    public function fetchAddressBalance(string $address): float
    {
        if ($address) {
            $this->response = $this->isErc20Token()
                ? $this->omnipay->fetchTokenBalance(['address' => $address, 'contract_address' => $this->getErc20TokenContractAddress()])->send()
                : $this->omnipay->fetchBalance(['address' => $address])->send();

            if ($this->isResponseSuccessful()) {
                $balance = $this->getResponseData(); // string
                // convert balance to ETH / tokens, because it's provided in wei
                return Ethereum::fromWei($balance, $this->getDecimals());
            }
        }

        return 0;
    }

    public function fetchTransaction(string $transactionId)
    {
        $this->response = $this->omnipay->fetchTransaction(['transactionReference' => $transactionId])->send();

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

    public function isErc20Token()
    {
        return $this->getPaymentGatewayMethod()->code == 'erc20';
    }

    public function getDepositAddress()
    {
        return $this->getMethod()->payment_method_parameters->address ?? NULL;
    }

    public function getDecimals()
    {
        return $this->isErc20Token() ? $this->getErc20TokenContractDecimals() : 18;
    }

    public function getErc20TokenContractAddress()
    {
        return $this->getMethod()->payment_method_parameters->contract_address ?? NULL;
    }

    public function getErc20TokenContractDecimals()
    {
        return (int) $this->getMethod()->payment_method_parameters->contract_decimals ?? NULL;
    }
}
