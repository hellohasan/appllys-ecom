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
        Schema::create('point_request_logs', function (Blueprint $table) {
            $table->id();
            $table->string('custom');
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('merchant_store_id')->constrained('merchant_stores')->cascadeOnDelete();
            $table->foreignId('payment_method_id')->constrained('payment_methods')->cascadeOnDelete();
            $table->float('point');
            $table->float('rate');
            $table->float('amount');
            $table->longText('transaction');
            $table->tinyInteger('status')->comment("0=Pending,1=Approve,2=Rejected");
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
        Schema::dropIfExists('point_request_logs');
    }
};
