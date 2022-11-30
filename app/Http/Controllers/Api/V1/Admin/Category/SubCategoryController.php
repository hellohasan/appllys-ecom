<?php

namespace App\Http\Controllers\Api\V1\Admin\Category;

use App\Models\SubCategory;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SubCategory::with('category:id,name')->orderByDesc('id')->get();
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
            'category_id' => 'required|exists:categories,id',
            'name'        => 'required|unique:categories,name',
            'status'      => 'boolean',
        ]);

        SubCategory::create([
            'category_id' => $request->input('category_id'),
            'name'        => $request->input('name'),
            'slug'        => Str::slug($request->input('name')),
            'status'      => $request->input('status'),
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
        $subcategory = SubCategory::findOrFail($id);

        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'name'        => 'required|unique:categories,name,' . $id,
            'status'      => 'boolean',
        ]);

        $subcategory->update([
            'category_id' => $request->input('category_id'),
            'name'        => $request->input('name'),
            'slug'        => Str::slug($request->input('name')),
            'status'      => $request->input('status'),
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
