<?php

use App\Http\Controllers\AppController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

// App Route
Route::get('init', [AppController::class, 'init']);

// Auth Route
Route::post('auth/register', [RegisterController::class, 'store']);
Route::post('auth/login', [LoginController::class, 'store']);
