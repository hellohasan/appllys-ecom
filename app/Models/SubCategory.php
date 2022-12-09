<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SubCategory extends Model
{
    use HasFactory;

    /**
     * @var string
     */
    protected $table = 'subcategories';

    /**
     * @var array
     */
    protected $fillable = [
        'category_id', 'name', 'slug', 'status',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'status' => 'boolean',
    ];

    /**
     * Get the category that owns the SubCategory
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    /**
     * Get all of the childcategories for the SubCategory
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function childcategories(): HasMany
    {
        return $this->hasMany(ChildCategory::class, 'subcategory_id')->where('status', 1);
    }
}
