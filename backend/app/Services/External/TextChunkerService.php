<?php

namespace App\Services\External;

class TextChunkerService
{
    public function chunk(
        string $text,
        int    $chunkSize = 800,
        int    $overlap = 100
    ): array
    {
        $chunks = [];
        $start = 0;
        $length = strlen($text);

        while ($start < $length) {
            $chunk = substr($text, $start, $chunkSize);
            $chunks[] = trim($chunk);

            $start += ($chunkSize - $overlap);
        }

        return array_filter($chunks);
    }
}
