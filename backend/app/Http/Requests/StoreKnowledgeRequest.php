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
            'type' => ['required', 'string', Rule::enum(KnowledgeType::class)],
            'title' => ['sometimes', 'string'],
            'textContent' => [
                Rule::requiredIf($this->type === KnowledgeType::TEXT->value),
                'nullable',
                'string'
            ],
            'files' => [
                Rule::requiredIf($this->type === KnowledgeType::FILE->value),
                'nullable',
                'array',
                'min:1',
            ],
            'files.*' => [
                'file',
                'mimes:pdf,docx,txt',
                'max:10240',
            ],
        ];
    }
}
