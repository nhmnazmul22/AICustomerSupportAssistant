<?php

namespace App\DTOs;

use App\Enums\KnowledgeType;
use Illuminate\Http\UploadedFile;

readonly class AIKnowledgeData
{
    /**
     * @param UploadedFile[]|null $files
     */
    public function __construct(
        public KnowledgeType $type,
        public ?string       $title,
        public ?string       $textContent,
        public ?array        $files,
    )
    {
    }

    public static function fromArray(array $data): self
    {
        return new self(
            type: $data['type'] instanceof KnowledgeType
                ? $data['type']
                : KnowledgeType::from($data['type']),

            title: $data['title'] ?? null,

            textContent: $data['textContent'] ?? null,

            files: $data['files'] ?? null,
        );
    }

    public function toArray(): array
    {
        return [
            'type' => $this->type->value,
            'title' => $this->title,
            'textContent' => $this->textContent,
            'files' => $this->files,
        ];
    }
}
