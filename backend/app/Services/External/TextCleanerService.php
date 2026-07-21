<?php

namespace App\Services\External;

class TextCleanerService
{
    public function clean(string $text): string
    {
        // Remove excessive whitespace
        $text = preg_replace('/\s+/', ' ', $text);

        // Remove control characters
        $text = preg_replace('/[\x00-\x1F\x7F]/u', '', $text);

        return trim($text);
    }
}
