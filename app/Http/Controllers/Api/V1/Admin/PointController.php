<?php

namespace App\Http\Controllers\Api\V1\Admin;

use Illuminate\Http\Request;
use App\Models\MerchantStore;
use App\Models\PointRequestLog;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class PointController extends Controller
{
    public function getRequest()
    {
        return PointRequestLog::with(['method:id,name', 'merchant:id,name'])->orderByDesc('id')->paginate(10);
    }

    /**
     * @param $custom
     */
    public function viewRequest($custom)
    {
        return PointRequestLog::with(['method', 'merchant.merchant'])->whereCustom($custom)->firstOrFail();
    }

    /**
     * @param Request $request
     * @param $custom
     */
    public function updateRequest(Request $request, $custom)
    {
        $log = PointRequestLog::whereCustom($custom)->firstOrFail();
        $request->validate([
            'status' => 'required',
        ]);

        if ($request->input('status') == 1) {
            $store = MerchantStore::whereMerchantId(Auth::id())->first();
            $store->point = customRound($store->point + $log->point);
            $store->save();
        }

        $log->status = $request->input('status');
        $log->save();

    }
}
