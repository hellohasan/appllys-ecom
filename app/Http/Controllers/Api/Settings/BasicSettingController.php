<?php

namespace App\Http\Controllers\Api\Settings;

use App\Models\BasicSetting;
use Illuminate\Http\Request;
use App\Helpers\CustomHelper;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class BasicSettingController extends Controller
{
    public function getBasicSetting()
    {
        return BasicSetting::select(['title', 'point', 'email', 'phone', 'address', 'copy_text'])->first();
    }

    /**
     * @param Request $request
     */
    public function submitBasicSetting(Request $request)
    {
        $request->validate([
            'title'     => 'required|max:191',
            'phone'     => 'required',
            'email'     => 'required|email|max:100',
            'address'   => 'required|max:191',
            'copy_text' => 'required|max:191',
        ]);

        try {
            DB::beginTransaction();

            $basic = BasicSetting::first();
            $basic->update($request->all());

            DB::commit();

            CustomHelper::changeEnv([
                'APP_NAME' => request('title'),
            ]);

            return response()->json(['message' => 'Successfully Accepted'], 200);
        } catch (\Exception$e) {
            DB::rollback();

            return response()->json(['message' => 'Something is wrong there'], 503);
        }
    }
}
