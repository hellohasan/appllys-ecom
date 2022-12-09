<?php

namespace App\Http\Controllers\Api\V1\Product;

use Auth;
use App\Models\Product;
use Illuminate\Support\Str;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use App\Models\MerchantStore;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;
use Stevebauman\Purify\Facades\Purify;

class ProductController extends Controller
{
    /**
     * @param Request $request
     */
    public function store(Request $request)
    {
        $request->validate([
            'category_id'      => 'required',
            'subcategory_id'   => 'required',
            'childcategory_id' => 'nullable',
            'name'             => 'required|max:191',
            'buy_price'        => 'required|numeric|min:1',
            'old_sell_price'   => 'nullable|numeric',
            'sell_price'       => 'required|numeric',
            'stock'            => 'required|numeric|min:1',
            'colors'           => 'nullable|array',
            'colors.*.text'    => 'required',
            'sizes'            => 'nullable|array',
            'sizes.*.text'     => 'required',
            'description'      => 'required',
            'images'           => 'required|array',
            'images.*.image'   => 'required|base64mimes:jpeg,jpg,png|base64max:3000',
        ]);

        $store = MerchantStore::whereMerchantId(Auth::id())->first();
        if ($store == null || ($store->status != 1)) {
            return response()->json(['message' => 'Your store not create yet or block now.'], 503);
        }

        $in = $request->except(['images', 'colors', 'sizes', 'description']);
        $in['custom'] = Str::random(16);
        $in['slug'] = Str::slug($request->input('name'));
        $in['merchant_store_id'] = $store->id;

        $colors = [];
        if (count($request->input('colors'))) {
            foreach ($request->input('colors') as $color) {
                $colors[] = [
                    'text' => $color['text'],
                ];
            }
        }
        $sizes = [];
        if (count($request->input('sizes'))) {
            foreach ($request->input('sizes') as $size) {
                $sizes[] = [
                    'text' => $size['text'],
                ];
            }
        }
        $in['colors'] = $colors;
        $in['sizes'] = $sizes;
        $in['point'] = customRound($request->input('sell_price') - $request->input('buy_price'));
        $in['description'] = Purify::clean($request->input('description'));
        $product = Product::create($in);
        foreach ($request->input('images') as $key => $image) {
            $file = $image['image'];
            $ext = 'webp';
            $start = $product->id . '_' . Str::random(12);
            Image::make($file)->encode('webp', 90)->resize(218, 218)->save(public_path("storage/products/{$start}.{$ext}")); //218X218
            Image::make($file)->encode('webp', 90)->resize(107, 107)->save(public_path("storage/products/{$start}_107X107.{$ext}")); //107X107
            Image::make($file)->encode('webp', 90)->resize(458, 458)->save(public_path("storage/products/{$start}_458X458.{$ext}")); //458X458
            if ($key == 0) {
                $product->image = $start . '.' . $ext;
                $product->save();
            }
            ProductImage::create([
                'product_id' => $product->id,
                'name'       => $start,
            ]);
        }
    }

    /**
     * @return mixed
     */
    public function index()
    {
        $products = Product::with([
            'store:id,name',
            'category:id,name',
            'subcategory:id,name',
            'childcategory:id,name',
        ])->orderByDesc('id')->get();

        $res['products'] = [];
        foreach ($products as $product) {
            $res['products'][] = [
                'store'          => $product->store->name,
                'category'       => $product->category->name,
                'subcategory'    => $product->subcategory->name,
                'childcategory'  => $product->childcategory?->name,
                'name'           => $product->name,
                'custom'         => $product->custom,
                'buy_price'      => $product->buy_price,
                'old_sell_price' => $product->old_sell_price,
                'sell_price'     => $product->sell_price,
                'point'          => $product->point,
                'stock'          => $product->stock,
                'image'          => asset("storage/products/{$product->image}"),
                'status'         => $product->status,
            ];
        }
        return response()->json($res, 200);
    }

    /**
     * @param $id
     */
    public function edit($id)
    {
        return Product::with(['images:id,product_id,name'])->whereCustom($id)->firstOrFail();
    }

    /**
     * @param Request $request
     * @param $id
     */
    public function update(Request $request, $id)
    {
        $product = Product::with('images')->whereCustom($id)->firstOrFail();

        $request->validate([
            'category_id'      => 'required',
            'subcategory_id'   => 'required',
            'childcategory_id' => 'nullable',
            'name'             => 'required|max:191',
            'buy_price'        => 'required|numeric|min:1',
            'old_sell_price'   => 'nullable|numeric',
            'sell_price'       => 'required|numeric',
            'stock'            => 'required|numeric|min:1',
            'colors'           => 'nullable|array',
            'colors.*.text'    => 'required',
            'sizes'            => 'nullable|array',
            'sizes.*.text'     => 'required',
            'description'      => 'required',
            'images'           => 'required|array',
            'images.*.image'   => 'nullable|base64mimes:jpeg,jpg,png|base64max:3000',
        ]);

        $store = MerchantStore::whereMerchantId(Auth::id())->first();
        if ($store == null || ($store->status != 1)) {
            return response()->json(['message' => 'Your store not create yet or block now.'], 503);
        }
        if ($store->merchant_id != Auth::id()) {
            return response()->json(['message' => 'Its not your item.'], 503);
        }

        $in = $request->except(['images', 'colors', 'sizes', 'description']);
        $in['slug'] = Str::slug($request->input('name'));
        $in['merchant_store_id'] = $store->id;

        $colors = [];
        if (count($request->input('colors'))) {
            foreach ($request->input('colors') as $color) {
                $colors[] = ['text' => $color['text']];
            }
        }
        $sizes = [];
        if (count($request->input('sizes'))) {
            foreach ($request->input('sizes') as $size) {
                $sizes[] = ['text' => $size['text']];
            }
        }
        $in['colors'] = $colors;
        $in['sizes'] = $sizes;
        $in['point'] = customRound($request->input('sell_price') - $request->input('buy_price'));
        $in['description'] = Purify::clean($request->input('description'));
        $product->update($in);

        $oldImageIds = $product->images->pluck('id')->toArray();
        $presentImageId = [];

        foreach ($request->input('images') as $key => $image) {
            if ($image['id']) {
                $presentImageId[] = $image['id'];
            }
            if (array_key_exists("image", $image) && $image['image'] != null) {
                $file = $image['image'];
                $ext = 'webp';
                $start = $product->id . '_' . Str::random(12);
                Image::make($file)->encode('webp', 90)->resize(218, 218)->save(public_path("storage/products/{$start}.{$ext}")); //218X218
                Image::make($file)->encode('webp', 90)->resize(107, 107)->save(public_path("storage/products/{$start}_107X107.{$ext}")); //107X107
                Image::make($file)->encode('webp', 90)->resize(458, 458)->save(public_path("storage/products/{$start}_458X458.{$ext}")); //458X458
                if ($image['id']) {
                    $productImage = ProductImage::find($image['id']);
                    File::delete(public_path("storage/products/{$productImage->name}.{$ext}")); //218X218
                    File::delete(public_path("storage/products/{$productImage->name}_107X107.{$ext}")); //107X107
                    File::delete(public_path("storage/products/{$productImage->name}_458X458.{$ext}")); //458X458
                    $productImage->update([
                        'name' => $start,
                    ]);
                } else {
                    ProductImage::create([
                        'product_id' => $product->id,
                        'name'       => $start,
                    ]);
                }
                if ($key == 0) {
                    $product->image = $start . '.' . $ext;
                    $product->save();
                }
            }
        }
        $deleteIds = array_diff($oldImageIds, $presentImageId);
        $deleteAbleImages = ProductImage::whereIn('id', $deleteIds)->get();
        foreach ($deleteAbleImages as $de) {
            File::delete(public_path("storage/products/{$de->name}.webp")); //218X218
            File::delete(public_path("storage/products/{$de->name}_107X107.webp")); //107X107
            File::delete(public_path("storage/products/{$de->name}_458X458.webp")); //458X458
            $de->delete();
        }

        return ProductImage::whereProductId($product->id)->get();
    }
}
