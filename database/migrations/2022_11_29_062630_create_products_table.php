<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('merchant_store_id')->constrained('merchant_stores')->cascadeOnDelete();
            $table->foreignId('category_id')->constrained()->cascadeOnDelete();
            $table->foreignId('subcategory_id')->constrained('subcategories')->cascadeOnDelete();
            $table->foreignId('childcategory_id')->nullable()->constrained('childcategories')->cascadeOnDelete();
            $table->string('name');
            $table->string('slug');
            $table->float('buy_price')->default(0);
            $table->float('old_sell_price')->nullable();
            $table->float('sell_price')->default(0);
            $table->float('point')->default(0);
            $table->integer('stock')->default(0);
            $table->json('colors')->nullable();
            $table->json('sizes')->nullable();
            $table->longText('description')->nullable();
            $table->string('image')->nullable();
            $table->boolean('status')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
