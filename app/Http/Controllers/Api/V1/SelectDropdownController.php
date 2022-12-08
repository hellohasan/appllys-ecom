<?php

namespace App\Http\Controllers\Api\V1;

use DB;
use App\Models\User;
use App\Models\Category;
use App\Models\SubCategory;
use App\Models\ChildCategory;
use App\Http\Controllers\Controller;
use Devfaysal\BangladeshGeocode\Models\Union;
use Devfaysal\BangladeshGeocode\Models\Upazila;
use Devfaysal\BangladeshGeocode\Models\District;

class SelectDropdownController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function loadCategories()
    {
        return Category::whereStatus(true)->select(['id', 'name as text'])->get();
    }

    public function loadMerchants()
    {
        return User::role("Super Admin")->select([
            'id',
            DB::raw('CONCAT(name," - ",email) as text'),
        ])->get();
    }

    /**
     * @param $catId
     */
    public function loadCategorySubcategories($catId)
    {
        return SubCategory::whereCategoryId($catId)->whereStatus(true)->select(['id', 'name as text'])->get();
    }

    /**
     * @param $id
     */
    public function loadSubcategoryChildCategory($sCatId)
    {
        return ChildCategory::whereCategoryId($sCatId)->whereStatus(true)->select(['id', 'name as text'])->get();
    }

    /**
     * @param $id
     */
    public function loadDivisionDistricts($id)
    {
        return District::select(['id', 'bn_name as text'])->whereDivisionId($id)->get();
    }

    /**
     * @param $id
     */
    public function loadDistrictUpazilas($id)
    {
        return Upazila::select(['id', 'bn_name as text'])->whereDistrictId($id)->get();
    }

    /**
     * @param $id
     */
    public function loadUpazilaUnions($id)
    {
        return Union::select(['id', 'bn_name as text'])->whereUpazilaId($id)->get();
    }

}
