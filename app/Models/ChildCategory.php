<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ChildCategory extends Model
{
    use HasFactory;

    /**
     * @var string
     */
    protected $table = 'childcategories';

    /**
     * @var array
     */
    protected $casts = [
        'status' => 'boolean',
    ];

    /**
     * @var array
     */
    protected $fillable = [
        'category_id',
        'subcategory_id',
        'name',
        'slug',
        'status',
    ];

    /**
     * Get the category that owns the ChildCategory
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    /**
     * Get the subcategory that owns the ChildCategory
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function subcategory(): BelongsTo
    {
        return $this->belongsTo(SubCategory::class, 'subcategory_id');
    }

}
