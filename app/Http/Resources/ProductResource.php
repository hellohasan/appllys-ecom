<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'store'          => $this->store->name,
            'category'       => $this->category->name,
            'subcategory'    => $this->subcategory->name,
            'childcategory'  => $this->childcategory?->name,
            'name'           => $this->name,
            'custom'         => $this->custom,
            'buy_price'      => $this->buy_price,
            'old_sell_price' => $this->old_sell_price,
            'sell_price'     => $this->sell_price,
            'point'          => $this->point,
            'stock'          => $this->stock,
            'image'          => asset("storage/products/{$this->image}"),
            'status'         => $this->status,
        ];
    }
}
