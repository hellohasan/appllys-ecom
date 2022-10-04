<?php

namespace App\Http\Controllers\Api\Settings;

use App\Helpers\CustomHelper;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class LanguageSettingController extends Controller
{
    /**
     * @param Request $request
     */
    public function changeLanguage(Request $request)
    {
        App::setLocale($request->lang);
        session()->put('locale', $request->lang);
        CustomHelper::changeEnv(['APP_LANG' => (string) $request->lang]);

        return response()->json(['message' => 'Language Change'], 200);
    }
}
