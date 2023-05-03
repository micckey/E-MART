<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    use HasFactory;

    protected $table = 'User';
    protected $fillable = [
        'User_name',
        'User_phone',
        'User_email',
        'User_password',        
    ];
    protected $primaryKey = 'User_id';
    public $timestamps = false;
}
