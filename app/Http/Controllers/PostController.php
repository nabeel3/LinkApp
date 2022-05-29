<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;
use PhpParser\Node\Stmt\Return_;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
class PostController extends Controller
{
    protected $user;
 
    public function __construct()
    {
        $this->user = JWTAuth::parseToken()->authenticate();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::with(["comments.replies.user","comments.user","tags", "user"])->get();
        return $posts;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $data = $request->only('title', 'content','image');

        // $file = $request->file('image');
        // $name = '/avatars/' . uniqid() . '.' . $file->extension();
        // $file->storePubliclyAs('public', $name);
        // $data['image'] = $name;

        // $file = $request->file('image');
        // $name = Str::random(10);
        // $url = Storage::putFileAs('images', $file, $name . '.' . $file->extension());




        $validator = Validator::make($data, [
            'title' => 'required|string',
            // 'image' => ['mimes:mpeg,ogg,mp4,webm,3gp,mov,flv,avi,wmv,ts|max:100040|required'],

        ]);

        //Send failed response if request is not valid
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()],400);
        }else
         {

            if($request->image){
                $file = $request->file('image');
                $name = '/avatars/' . uniqid() . '.' . $file->extension();
                $url = $file->storePubliclyAs('public', $name);
                $data['avatar'] = $name;

                $post = new Post;
 
                $post->title = $request->title;
                $post->content = $request->content;
                $post->image = env('APP_URL') . '/storage/' . $name;
                $post->save();

            }
            else
            {

                $post = new Post;
                $post->title = $request->title;
                $post->content = $request->content;
                $post->save();
    
            }
           


            // $video= $request->file('image');
            // $input = time().$video->getClientOriginalExtension();
            // $path = public_path().'/uploads/';
            // $destinationPath = 'uploads/videos';
            // $video->move($destinationPath, $input);


            if($request->tags){
                $tags = json_decode($request->tags);
                foreach($tags as $tag){
                    $post->tags()->attach(($tag));
                }
            }

            

            

            return response()->json([
                'success' => true,
                'message' => 'Post created successfully',
                'data' => $post
            ], Response::HTTP_OK);
    


        }
       
        //Request is valid, create new product
        // $product = Post::create([
        //     'title' => $request->title,
        //     'content' => $request->content,
        //     'image' => env('APP_URL') . '/' . $url,
        // ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        

        $post = Post::where('id', $id)->with(["comments.replies.user","comments.user","tags", "user"])->first();
     
    
        if (!$post) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, product not found.'
            ], 400);
        }
    
        return $post;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //

        $data = $request->only('title', 'content');
        $validator = Validator::make($data, [
            'title' => 'required|string',

        ]);

        //Send failed response if request is not valid
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }

        //Request is valid, create new product
        $post = Post::where('id', $request->id)
            ->update([
              'title' =>$request->title,
              'content' => $request->content,
            
            ]);


        //Product created, return success response
        return response()->json([
            'success' => true,
            'message' => 'Post created successfully',
            'data' => $post
        ], Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $res = Post::where('id',$id)->delete();
        
        return response()->json([
            'success' => true,
            'message' => 'Product deleted successfully'
        ], Response::HTTP_OK);
    }
}
