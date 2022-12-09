<?php

namespace App\Http\Controllers\Api\V1\Admin\Category;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:categories', ['only' => ['index']]);
        $this->middleware('permission:categories-store', ['only' => ['store']]);
        $this->middleware('permission:categories-update', ['only' => ['update']]);
        $this->middleware('permission:categories-destroy', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Category::orderByDesc('id')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'   => 'required|unique:categories,name',
            'image'  => 'required|base64mimes:jpeg,jpg,png|base64max:900',
            'status' => 'boolean',
        ]);

        $file = $request->input('image');
        $filename = Str::random(12) . '.webp';
        Image::make($file)->encode('webp', 90)->resize(131, 117)->save(public_path("storage/categories/{$filename}"));

        Category::create([
            'name'   => $request->input('name'),
            'slug'   => Str::slug($request->input('name')),
            'image'  => $filename,
            'status' => $request->input('status'),
        ]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $category = Category::findOrFail($id);
        $request->validate([
            'name'   => 'required|unique:categories,name,' . $category->id,
            'image'  => 'nullable|base64mimes:jpeg,jpg,png|base64max:900',
            'status' => 'boolean',
        ]);

        $in['name'] = $request->input('name');
        $in['slug'] = Str::slug($request->input('name'));
        $in['status'] = $request->input('status');
        if ($request->input('image')) {
            $file = $request->input('image');
            $filename = Str::random(12) . '.webp';
            Image::make($file)->encode('webp', 90)->resize(131, 117)->save(public_path("storage/categories/{$filename}"));
            File::delete(public_path("storage/categories/{$category->image}"));
            $in['image'] = $filename;
        }

        $category->update($in);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
