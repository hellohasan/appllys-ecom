<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
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
        'custom',
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
        'status'  => 'boolean',
    ];

    /* public function getImageAttribute()
    {
    return asset("storage/products/{$this->image}");
    } */

    /**
     * Get the store that owns the Product
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function store(): BelongsTo
    {
        return $this->belongsTo(MerchantStore::class, 'merchant_store_id');
    }

    /**
     * Get the category that owns the Product
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    /**
     * Get the subcategory that owns the Product
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function subcategory(): BelongsTo
    {
        return $this->belongsTo(SubCategory::class, 'subcategory_id');
    }

    /**
     * Get the childcategory that owns the Product
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function childcategory(): BelongsTo
    {
        return $this->belongsTo(ChildCategory::class, 'childcategory_id');
    }

    /**
     * Get all of the images for the Product
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function images(): HasMany
    {
        return $this->hasMany(ProductImage::class, 'product_id');
    }
}
