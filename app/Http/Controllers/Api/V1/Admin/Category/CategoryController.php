<?php

namespace App\Http\Controllers\Api\V1\Admin\Category;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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
            'status' => 'boolean',
        ]);

        Category::create([
            'name'   => $request->input('name'),
            'slug'   => Str::slug($request->input('name')),
            'status' => $request->input('status'),
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
            'status' => 'boolean',
        ]);

        $category->update([
            'name'   => $request->input('name'),
            'slug'   => Str::slug($request->input('name')),
            'status' => $request->input('status'),
        ]);
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
