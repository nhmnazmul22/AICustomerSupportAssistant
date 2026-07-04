<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email'],
            'password' => ['required', Password::min(8)->max(18)],
            'phone' => ['nullable', 'digits:11'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'The :attribute field is required.',
            'name.string' => 'The :attribute must be a valid string.',
            'name.max' => 'The :attribute may not be greater than :max characters.',
            'email.required' => 'The :attribute field is required.',
            'email.email' => 'Please enter a valid :attribute.',
            'password.required' => 'The :attribute field is required.',
            'password.min' => 'The :attribute must be at least :min characters.',
            'password.max' => 'The :attribute may not be greater than :max characters.',
            'phone.digits' => 'The :attribute must be exactly :digits digits.',
        ];
    }

    public function attributes(): array
    {
        return [
            'name' => 'full name',
            'email' => 'email address',
            'password' => 'password',
            'phone' => 'phone number',
        ];
    }
}
