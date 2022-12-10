<?php

namespace App\Http\Controllers\Api\V1\Merchant;

use Illuminate\Support\Str;
use App\Models\BasicSetting;
use Illuminate\Http\Request;
use App\Models\MerchantStore;
use App\Models\PointRequestLog;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Stevebauman\Purify\Facades\Purify;

class MerchantController extends Controller
{

    public function logPointRequest()
    {
        return PointRequestLog::whereUserId(Auth::id())->with('method')->orderByDesc('id')->paginate(10);
    }

    /**
     * @param Request $request
     */
    public function pointRequestSubmit(Request $request)
    {
        $request->validate([
            'point'       => 'required|numeric|min:0',
            'method_id'   => 'required|exists:payment_methods,id',
            'transaction' => 'required',
        ]);

        $store = MerchantStore::whereMerchantId(Auth::id())->first();
        if ($store == null) {
            return response()->json(['message' => 'Store not found'], 503);
        }
        $basic = BasicSetting::first();
        $log['custom'] = Str::random(12);
        $log['user_id'] = Auth::id();
        $log['merchant_store_id'] = $store->id;
        $log['payment_method_id'] = $request->input('method_id');
        $log['point'] = $request->input('point');
        $log['rate'] = $basic->point;
        $log['amount'] = customRound($request->input('point') * $basic->point);
        $log['transaction'] = Purify::clean($request->input('transaction'));
        $log['status'] = 0;
        PointRequestLog::create($log);

        return response()->json(['custom' => $log['custom']], 200);
    }

    /**
     * @param $custom
     */
    public function viewRequestSubmit($custom)
    {
        return PointRequestLog::with('method')->whereCustom($custom)->firstOrFail();
    }
}
