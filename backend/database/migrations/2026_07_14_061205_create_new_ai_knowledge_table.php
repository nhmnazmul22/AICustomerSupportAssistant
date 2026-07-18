<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ai_knowledge', function (Blueprint $table) {
            $table->id();
            $table->string('type')->default('text');
            $table->string('title')->nullable();
            $table->longText('content')->default('');

            $table->string('file_path')->nullable();
            $table->string('file_name')->nullable();
            $table->string('mime_type')->nullable();
            $table->string('status')->default('uploaded');
            $table->foreignId('user_id')->nullable()
                ->constrained('users', 'id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ai_knowledge');
    }
};
