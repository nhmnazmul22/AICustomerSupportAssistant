<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;

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
    }
}
