<?php

use App\Http\Controllers\AuthController;


/**
 * Auth Routes
 */
Route::prefix('auth')->as('auth.')->group(function (){
    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});
