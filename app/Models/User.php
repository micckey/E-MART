<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;


    protected $table = 'Customers';
    protected $fillable = [
        'Customers_fname',
        'Customers_lname',
        'Customers_email',
        'Customers_phone_no',
        'Customers_gender',
        'Customers_password',
    ];
    protected $primaryKey = 'Customers_id';
    public $timestamps = false;


    protected $hidden = [
        'Customers_password',
    ];
}
