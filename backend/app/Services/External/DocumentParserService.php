<?php


namespace App\Services\External;

use Exception;
use PhpOffice\PhpWord\IOFactory;
use Smalot\PdfParser\Parser;

class DocumentParserService
{
    /**
     * @throws Exception
     */
    public function extract(string $path): string
    {
        $extension = pathinfo($path, PATHINFO_EXTENSION);

        return match ($extension) {
            'txt' => file_get_contents($path),
            'pdf' => $this->extractPdf($path),
            'docx' => $this->extractDocx($path),
            default => throw new Exception('Unsupported file'),
        };
    }

    /**
     * @throws Exception
     */
    private function extractPdf(string $path): string
    {
        return (new Parser())
            ->parseFile($path)
            ->getText();
    }

    private function extractDocx(string $path): string
    {
        $phpWord = IOFactory::load($path);
        $text = '';

        foreach ($phpWord->getSections() as $section) {
            foreach ($section->getElements() as $element) {
                if (method_exists($element, 'getText')) {
                    $text .= $element->getText() . PHP_EOL;
                }
            }
        }

        return $text;
    }
}
