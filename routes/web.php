<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', [WelcomeController::class, 'index'])->name('home');
Route::get('product-details/{custom}/{slug}', [WelcomeController::class, 'productDetails'])->name('product-details');

/* Auth::routes(); */

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/backend', function () {
    return view('layouts.master');
});

Route::get('{any}', function () {
    return view('layouts.master');
})->where('any', '[\/\w\.-]*');
