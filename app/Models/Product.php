<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    /**
     * @var array
     */
    protected $fillable = [
        'merchant_store_id',
        'category_id',
        'subcategory_id',
        'childcategory_id',
        'name',
        'slug',
        'buy_price',
        'old_sell_price',
        'sell_price',
        'point',
        'stock',
        'colors',
        'sizes',
        'description',
        'image',
        'status',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'boolean' => 'status',
        'colors'  => 'json',
        'sizes'   => 'json',
    ];
}
