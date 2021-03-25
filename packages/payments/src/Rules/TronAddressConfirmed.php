<?php

namespace Packages\Payments\Rules;

use App\Models\User;
use Illuminate\Contracts\Validation\Rule;
use Packages\Payments\Models\TronAddress;

class TronAddressConfirmed implements Rule
{
    private $user;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return TronAddress::where('user_id', $this->user->id)->where('address', $value)->confirmed()->count() == 1;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return __('Please confirm you own this Tron address first.');
    }
}
