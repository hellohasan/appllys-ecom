<?php

namespace App\Http\Controllers\Api\V1\Product;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    /**
     * @param Request $request
     */
    public function store(Request $request)
    {
        $request->validate([
            'VAL1' => 'required',
        ]);

    }
}
