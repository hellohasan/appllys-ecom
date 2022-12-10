<?php

namespace App\Http\Controllers\Api\V1\Admin;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Helpers\CustomHelper;
use App\Models\MerchantStore;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;

class MerchantStoreController extends Controller
{

    public function __construct()
    {
        $this->middleware('permission:merchant-stores', ['only' => ['index']]);
        $this->middleware('permission:merchant-stores-store', ['only' => ['store']]);
        $this->middleware('permission:merchant-stores-edit', ['only' => ['edit']]);
        $this->middleware('permission:merchant-stores-update', ['only' => ['update']]);
    }

    public function index()
    {
        return MerchantStore::with('merchant')->orderByDesc('id')->paginate(10);
    }

    /**
     * @param Request $request
     */
    public function store(Request $request)
    {
        $request->validate([
            'merchant_id' => 'required|exists:users,id',
            'name'        => 'required|unique:merchant_stores,name',
            'address'     => 'required',
            'logo'        => 'required|base64mimes:jpg,jpeg,png',
            'banner'      => 'required|base64mimes:jpg,jpeg,png|base64max:3000',
            'product'     => 'boolean',
            'status'      => 'boolean',
        ]);

        $chk = MerchantStore::whereMerchantId($request->input('merchant_id'))->exists();
        if ($chk) {
            return response()->json(['message' => 'This merchant already have a store'], 503);
        }

        $in = $request->except(['logo', 'banner']);
        $in['slug'] = Str::slug($request->input('name'));
        if ($request->logo) {
            $name = CustomHelper::getFileNameExtension($request->input('logo'));
            Image::make($request->logo)->resize(100, 100)->save(public_path("storage/stores/{$name}"));
            $in['logo'] = $name;
        }
        if ($request->banner) {
            $name = CustomHelper::getFileNameExtension($request->input('banner'));
            Image::make($request->banner)->resize(650, 325)->save(public_path("storage/stores/{$name}"));
            $in['banner'] = $name;
        }
        MerchantStore::create($in);
    }

    /**
     * @param $id
     */
    public function edit($id)
    {
        return MerchantStore::findOrFail($id);
    }

    /**
     * @param Request $request
     * @param $id
     */
    public function update(Request $request, $id)
    {
        $merchant = MerchantStore::findOrFail($id);
        $request->validate([
            'merchant_id' => 'required|exists:users,id',
            'name'        => 'required|unique:merchant_stores,name,' . $id,
            'address'     => 'required',
            'logo'        => 'sometimes|base64mimes:jpg,jpeg,png',
            'banner'      => 'sometimes|base64mimes:jpg,jpeg,png|base64max:3000',
            'product'     => 'boolean',
            'status'      => 'boolean',
        ]);

        $in = $request->except(['logo', 'banner']);
        $in['slug'] = Str::slug($request->input('name'));
        if ($request->logo) {
            $name = CustomHelper::getFileNameExtension($request->input('logo'));
            Image::make($request->logo)->resize(100, 100)->save(public_path("storage/stores/{$name}"));
            $in['logo'] = $name;
            File::delete(public_path("storage/stores/{$merchant->getRawOriginal('logo')}"));
        }
        if ($request->banner) {
            $name = CustomHelper::getFileNameExtension($request->input('banner'));
            Image::make($request->banner)->resize(650, 325)->save(public_path("storage/stores/{$name}"));
            $in['banner'] = $name;
            File::delete(public_path("storage/stores/{$merchant->getRawOriginal('banner')}"));
        }
        $merchant->update($in);
    }
}
