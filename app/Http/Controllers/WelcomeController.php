<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use App\Models\MerchantStore;

class WelcomeController extends Controller
{
    public function index()
    {
        $data['page_title'] = 'Welcome';
        $data['categories'] = Category::with([
            'products',
            'subcategories.childcategories',
        ])->whereStatus(true)->get();
        $data['shops'] = MerchantStore::orderByDesc('id')->take(10)->get();
        return view('home.home', $data);
    }

    /**
     * @param $custom
     * @param $slug
     */
    public function productDetails($custom, $slug)
    {
        $data['page_title'] = 'Product Details';
        $data['categories'] = Category::with(['subcategories.childcategories'])->whereStatus(true)->get();
        $data['shops'] = MerchantStore::orderByDesc('id')->take(10)->get();
        $data['product'] = Product::with('images')->whereCustom($custom)->firstOrFail();
        return view('home.product', $data);
    }
}
