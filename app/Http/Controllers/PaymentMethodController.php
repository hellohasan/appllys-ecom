<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PaymentMethod;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;

class PaymentMethodController extends Controller
{

    public function index()
    {
        return PaymentMethod::orderByDesc('id')->get();
    }

    /**
     * @param Request $request
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'   => 'required',
            'image'  => 'required|base64mimes:jpeg,png,jpg',
            'val1'   => 'required',
            'status' => 'boolean',
        ]);

        $in = $request->all();
        if ($request->input('image')) {
            $image = $request->input('image');
            $filename = time() . '.webp';
            Image::make($image)->encode('webp')->resize(120, 120)->save(public_path("storage/methods/$filename"));
            $in['image'] = $filename;
        }
        PaymentMethod::create($in);
    }

    /**
     * @param $id
     */
    public function edit($id)
    {
        return PaymentMethod::findOrFail($id);
    }

    /**
     * @param Request $request
     * @param $id
     */
    public function update(Request $request, $id)
    {
        $method = PaymentMethod::findOrFail($id);
        $request->validate([
            'name'   => 'required',
            'image'  => 'nullable|base64mimes:jpeg,png,jpg',
            'val1'   => 'required',
            'status' => 'boolean',
        ]);

        $in = $request->except('image');
        if ($request->input('image')) {
            $image = $request->input('image');
            $filename = time() . '.webp';
            Image::make($image)->encode('webp')->resize(120, 120)->save(public_path("storage/methods/$filename"));
            File::delete(public_path("storage/methods/{$method->image}"));
            $in['image'] = $filename;
        }

        $method->update($in);
    }
}
