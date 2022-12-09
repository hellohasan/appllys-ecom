<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;

    /**
     * @var array
     */
    protected $fillable = [
        'name', 'slug', 'status', 'image',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'status' => 'boolean',
    ];

    /**
     * Get all of the subcategories for the Category
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function subcategories(): HasMany
    {
        return $this->hasMany(SubCategory::class, 'category_id')->where('status', true);
    }

    /**
     * Get all of the products for the Category
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function products(): HasMany
    {
        return $this->hasMany(Product::class, 'category_id')->take(10);
    }
}
