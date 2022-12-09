<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PaymentMethod extends Model
{
    use HasFactory;

    /**
     * @var string
     */
    protected $table = 'payment_methods';

    /**
     * @var array
     */
    protected $fillable = [
        'name', 'image', 'val1', 'val2', 'val3', 'status',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'val3'   => 'json',
        'status' => 'boolean',
    ];
}
