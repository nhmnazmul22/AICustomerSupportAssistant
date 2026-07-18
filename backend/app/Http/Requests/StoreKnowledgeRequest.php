<?php

namespace App\Http\Requests;

use App\Enums\KnowledgeType;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreKnowledgeRequest extends FormRequest
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
            'type' => ['nullable', 'string', Rule::in(KnowledgeType::cases())],
            'title' => ['sometimes', 'string'],
            'textContent' => ['required_without:files', 'string'],
            'files' => [
                'required_without:textContent',
                'array',
                'min:1',
            ],
            'files.*' => [
                'file',
                'mimes:pdf,doc,docx,txt',
                'max:10240',
            ],
        ];
    }
}
