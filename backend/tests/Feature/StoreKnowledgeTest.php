<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;

class StoreKnowledgeTest extends BaseTest
{
    use RefreshDatabase;

    public function test_admin_can_upload_raw_test_and_store_it_into_DB()
    {
        $this->authUser();
        $payload = [
            'type' => 'text',
            'title' => 'testing',
            'textContent' => 'This is test content'
        ];

        $response = $this->postJson(route('store-knowledge'), $payload);

        $response->assertOk()
            ->assertJson([
                'success' => true,
                'message' => 'Knowledge updated with new data'
            ])
            ->assertJsonStructure([
                'success',
                'message',
                'data' => [
                    'id',
                    'type',
                    'content',
                    'user' => [
                        'id',
                        'name',
                        'email'
                    ],
                    'created_at',
                    'updated_at',
                ],
            ]);

        $this->assertDatabaseHas('ai_knowledge', [
            'type' => 'text',
            'title' => 'testing',
            'content' => 'This is test content'
        ]);
    }

    public function test_admin_can_upload_pdf_and_store_it_into_DB()
    {
        $this->authUser();
        $pdfFile = new UploadedFile(
            base_path('tests/Fixtures/sample.pdf'),
            'sample.pdf',
            'application/pdf',
            null,
            true
        );

        $payload = [
            'type' => 'file',
            'title' => 'testing pdf documents',
            'files' => [$pdfFile]
        ];


        $response = $this->postJson(route('store-knowledge'), $payload);

        $response->assertOk()
            ->assertJson([
                'success' => true,
                'message' => 'Knowledge updated with new data'
            ])
            ->assertJsonStructure([
                'success',
                'message',
                'data' => [
                    'id',
                    'type',
                    'content',
                    'user' => [
                        'id',
                        'name',
                        'email'
                    ],
                    'created_at',
                    'updated_at',
                ],
            ]);

        $this->assertDatabaseHas('ai_knowledge', [
            'type' => 'pdf',
            'title' => 'testing pdf documents',
            'content' => 'Hello Laravel! This is a knowledge base document. Framework: Laravel Language: PHP'
        ]);
    }
}
