<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductImageResource extends JsonResource
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
            'product_id'   => $this->product_id,
            'name'         => $this->name,
            'image_small'  => asset("storage/products/{$this->name}_107X107.webp"),
            'image_medium' => asset("storage/products/{$this->name}.webp"),
            'image_large'  => asset("storage/products/{$this->name}_458X458.webp"),
        ];
    }
}
