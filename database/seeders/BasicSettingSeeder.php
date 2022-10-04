<?php

namespace Database\Seeders;

use App\Models\BasicSetting;
use Illuminate\Database\Seeder;

class BasicSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        BasicSetting::create([
            'title'     => 'SOFTWAREZON',
            'est'       => '2018',
            'phone'     => '01571118839',
            'email'     => 'softwarezon@hotmail.com',
            'address'   => 'Mirpur Dhaka, 1216',
            'copy_text' => 'All Copyright Reserve by Softwarezon'
        ]);
    }
}
