<?php

namespace Database\Factories;

use App\Models\Admission;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Admission>
 */
class AdmissionFactory extends Factory
{
    /**
     * @var mixed
     */
    protected $model = Admission::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'custom'              => Str::random(12),
            'academic_session_id' => '2',
            'academic_class_id'   => '8',
            'academic_class_type' => '0',
            'leveloneable_type'   => 'App\Models\AcademicSection',
            'leveloneable_id'     => '1',
            'student_info'        => ['name' => 'Hasan'],
            'address_info'        => ['name' => 'Hasan'],
            'parent_info'         => ['name' => 'Hasan'],
            'guardian_type'       => '0',
            'guardian_info'       => ['name' => 'Hasan'],
            'family_info'         => ['name' => 'Hasan'],
            'previous_institute'  => '1',
            'previous_info'       => ['name' => 'Hasan'],
        ];
    }
}
