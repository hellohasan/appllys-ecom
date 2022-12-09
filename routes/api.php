<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\User\UserController;
use App\Http\Controllers\PaymentMethodController;
use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Http\Controllers\Api\Settings\RoleController;
use App\Http\Controllers\Api\V1\SelectDropdownController;
use App\Http\Controllers\Api\Auth\ResetPasswordController;
use App\Http\Controllers\Api\V1\Product\ProductController;
use App\Http\Controllers\Api\Auth\ForgetPasswordController;
use App\Http\Controllers\Api\Settings\PermissionController;
use App\Http\Controllers\Api\Settings\BasicSettingController;
use App\Http\Controllers\Api\V1\Admin\MerchantStoreController;
use App\Http\Controllers\Api\Settings\LanguageSettingController;
use App\Http\Controllers\Api\V1\Admin\Category\CategoryController;
use App\Http\Controllers\Api\V1\Admin\Category\SubCategoryController;
use App\Http\Controllers\Api\V1\Admin\Category\ChildCategoryController;

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

Route::prefix('auth')->group(function () {
    Route::post('login', [LoginController::class, 'login']);
    Route::post('register', [RegisterController::class, 'register']);
    Route::post('logout', [LoginController::class, 'logout'])->middleware('auth:sanctum');

    Route::post('forget-password', [ForgetPasswordController::class, 'sendPasswordResetLink']); // Send reset password mail
    Route::post('reset-password', [ResetPasswordController::class, 'reset']); // handle reset password form process

});

Route::group(['middleware' => 'auth:sanctum'], function () {

    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::get('change-language', [LanguageSettingController::class, 'changeLanguage']);
    Route::post('update-profile', [UserController::class, 'updateProfile']);
    Route::post('update-password', [UserController::class, 'updatePassword']);

    Route::apiResource('roles', RoleController::class)->except(['show']);
    Route::apiResource('permissions', PermissionController::class)->except(['show']);

    Route::get('user-list', [DashboardController::class, 'getUserList']);
    Route::post('user-store', [DashboardController::class, 'storeUser']);
    Route::put('user-update/{id}', [DashboardController::class, 'updateUser']);
    Route::delete('user-delete/{id}', [DashboardController::class, 'deleteUser']);

    Route::get('role-list', [DashboardController::class, 'getRoleList']);

    /* Categories Route List */
    Route::apiResource('categories', CategoryController::class)->except(['show', 'destroy']);
    Route::apiResource('subcategories', SubCategoryController::class)->except(['show', 'destroy']);
    Route::apiResource('childcategories', ChildCategoryController::class)->except(['show', 'destroy']);

    /* Merchant Store */
    Route::get('merchant-stores', [MerchantStoreController::class, 'index']);
    Route::post('merchant-stores', [MerchantStoreController::class, 'store']);
    Route::get('merchant-stores/{id}/edit', [MerchantStoreController::class, 'edit']);
    Route::put('merchant-stores/{id}/edit', [MerchantStoreController::class, 'update']);

    /* Product Controller */
    Route::post('products', [ProductController::class, 'store']);
    Route::get('products', [ProductController::class, 'index']);
    Route::get('products/{id}/edit', [ProductController::class, 'edit']);
    Route::put('products/{id}/edit', [ProductController::class, 'update']);

    Route::get('basic-setting', [BasicSettingController::class, 'getBasicSetting']);
    Route::post('basic-setting-submit', [BasicSettingController::class, 'submitBasicSetting']);

    /* Payment Method Controller */
    Route::get('payment-method', [PaymentMethodController::class, 'index'])->permission('payment-method');
    Route::post('payment-method', [PaymentMethodController::class, 'store'])->permission('payment-method-store');
    Route::get('payment-method/{id}/edit', [PaymentMethodController::class, 'edit'])->permission('payment-method-edit');
    Route::put('payment-method/{id}/edit', [PaymentMethodController::class, 'update'])->permission('payment-method-update');

    Route::get('load-category-dropdown', [SelectDropdownController::class, 'loadCategories']);
    Route::get('load-category-subcategories-dropdown/{catId}', [SelectDropdownController::class, 'loadCategorySubcategories']);
    Route::get('load-subcategory-childcategories-dropdown/{catId}', [SelectDropdownController::class, 'loadSubcategoryChildCategory']);
    Route::get('load-merchant-list', [SelectDropdownController::class, 'loadMerchants']);

    Route::get('load-division-districts/{id}', [SelectDropdownController::class, 'loadDivisionDistricts']);
    Route::get('load-district-upazilas/{id}', [SelectDropdownController::class, 'loadDistrictUpazilas']);
    Route::get('load-upazila-unions/{id}', [SelectDropdownController::class, 'loadUpazilaUnions']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
