<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PointRequestLog extends Model
{
    use HasFactory;

    /**
     * @var array
     */
    protected $fillable = [
        'custom',
        'user_id',
        'merchant_store_id',
        'payment_method_id',
        'amount',
        'rate',
        'point',
        'status',
        'transaction',
    ];

    /**
     * Get the method that owns the PointRequestLog
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function method(): BelongsTo
    {
        return $this->belongsTo(PaymentMethod::class, 'payment_method_id');
    }

    /**
     * Get the merchant that owns the PointRequestLog
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function merchant(): BelongsTo
    {
        return $this->belongsTo(MerchantStore::class, 'merchant_store_id');
    }
}
