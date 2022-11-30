<?php

namespace App\Http\Controllers\Api\V1\Admin\Category;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\ChildCategory;
use App\Http\Controllers\Controller;

class ChildCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cats = ChildCategory::with(['category:id,name', 'subcategory:id,name'])->orderByDesc('id')->get();
        return response()->json($cats, 200);
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
            'category_id'    => 'required|exists:categories,id',
            'subcategory_id' => 'required|exists:subcategories,id',
            'name'           => 'required|unique:childcategories,name',
            'status'         => 'boolean',
        ]);

        ChildCategory::create([
            'category_id'    => $request->input('category_id'),
            'subcategory_id' => $request->input('subcategory_id'),
            'name'           => $request->input('name'),
            'slug'           => Str::slug($request->input('name')),
            'status'         => $request->input('status'),
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        dd($id);
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
        $child = ChildCategory::findOrFail($id);

        $request->validate([
            'category_id'    => 'required|exists:categories,id',
            'subcategory_id' => 'required|exists:subcategories,id',
            'name'           => 'required|unique:childcategories,name,' . $id,
            'status'         => 'boolean',
        ]);

        $child->update([
            'category_id'    => $request->input('category_id'),
            'subcategory_id' => $request->input('subcategory_id'),
            'name'           => $request->input('name'),
            'slug'           => Str::slug($request->input('name')),
            'status'         => $request->input('status'),
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
