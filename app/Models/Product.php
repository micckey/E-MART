<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'Product';
    protected $fillable = [
        'Product_name',
        'Product_description',
        'Product_price',
        'Product_image',
        'Product_User_id',
    ];
    protected $primaryKey = 'Product_id';
    public $timestamps = false;
}
