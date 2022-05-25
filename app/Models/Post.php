<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $fillable = ['title'];

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'post_tag');
    }   
    public function videos()
    {
        return $this->belongsToMany(Video::class, 'post_video');
    }   

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable')->whereNull('parent_id');
    }
}
