<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\StoreKnowledgeController;


/**
 * Auth Routes
 */
Route::prefix('auth')->as('auth.')->group(function () {
    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/login', [AuthController::class, 'login'])->name('login');

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/me', [AuthController::class, 'me'])->name('me');
        Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    });
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/store-knowledge', [StoreKnowledgeController::class, 'store'])->name('store-knowledge');
});
