<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->name(),
            'uuid' => $this->faker->uuid(),
            'published' => $this->faker->numberBetween(0,2),
            'raw' => $this->faker->realText,
            'excerpt' => $this->faker->realTextBetween(10,300),
            'category_id' => $this->faker->numberBetween(1, 20),
            'user_id' => $this->faker->numberBetween(1,11),
            'created_at' => $this->faker->dateTimeBetween('-50 days','-2 days'),
        ];
    }
}
