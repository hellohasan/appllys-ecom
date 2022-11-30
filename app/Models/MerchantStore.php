<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MerchantStore extends Model
{
    use HasFactory;

    /**
     * @var array
     */
    protected $fillable = [
        'merchant_id',
        'name',
        'slug',
        'address',
        'logo',
        'banner',
        'product',
        'status',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'product' => 'boolean',
        'status'  => 'boolean',
    ];

    /**
     * Get the merchant that owns the MerchantStore
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function merchant(): BelongsTo
    {
        return $this->belongsTo(User::class, 'merchant_id');
    }

    /**
     * @param $value
     */
    public function getLogoAttribute($value)
    {
        return asset('storage/stores/' . $value);
    }

    /**
     * @param $value
     */
    public function getBannerAttribute($value)
    {
        return asset('storage/stores/' . $value);
    }

}
