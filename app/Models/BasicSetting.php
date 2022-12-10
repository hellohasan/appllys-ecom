<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BasicSetting extends Model
{
    use HasFactory;

    /**
     * @var array
     */
    protected $fillable = ['title', 'phone', 'email', 'address', 'copy_text', 'point'];
}
