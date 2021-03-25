<?php

namespace Packages\Payments\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Packages\Payments\Helpers\Ethereum;
use Packages\Payments\Http\Requests\StoreEthereumAddress;
use Packages\Payments\Http\Requests\VerifyEthereumAddress;
use Packages\Payments\Models\EthereumAddress;

class EthereumController extends Controller
{
    public function index(Request $request)
    {
        return EthereumAddress::where('user_id', $request->user()->id)->confirmed()->get();
    }

    /**
     * Create or update an ethereum address
     *
     * @param StoreEthereumAddress $request
     * @return mixed
     */
    public function store(StoreEthereumAddress $request)
    {
        return EthereumAddress::updateOrCreate(
            ['user_id' => $request->user()->id, 'address' => $request->address],
            ['message' => Str::random(20)]
        );
    }

    /**
     * Verify ethereum signtarure to confirm a given address belongs to user
     *
     * @param VerifyEthereumAddress $request
     * @param EthereumAddress $ethereumAddress
     * @return EthereumAddress
     */
    public function verify(VerifyEthereumAddress $request, EthereumAddress $ethereumAddress)
    {
        if (Ethereum::isSignatureValid($ethereumAddress->message, $request->signature, $ethereumAddress->address)) {
            $ethereumAddress->update(['confirmed' => TRUE]);
        }

        return $ethereumAddress;
    }
}
