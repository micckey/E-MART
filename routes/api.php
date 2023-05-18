<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/user/register', [AuthController::class, 'register']);
Route::post('/user/login', [AuthController::class, 'login'])->name('login');

// Route::middleware('auth.api')->group(function () {    
//     Route::post('/addProduct', [ProductController::class, 'addproducts']);
//     Route::post('/user/logout', [AuthController::class, 'logout']);
// });

Route::get('/get_products', [ProductController::class, 'getProducts']);
Route::post('/add_product', [ProductController::class, 'addproducts']);

