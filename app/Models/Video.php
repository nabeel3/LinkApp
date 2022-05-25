<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    public function post()
    {
        return $this->belongsToMany(Post::class, 'post_video');
    }  
}
