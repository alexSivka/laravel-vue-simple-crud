<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        $faker = Faker::create();
        $worker_id = DB::table('workers')->insertGetId([
            'name' => $faker->name,
            'img' => '',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        $job_id = DB::table('jobs')->insertGetId([
            'name' => $faker->sentence,
            'description' => $faker->paragraph,
            'status' => 'новое',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('worker_jobs')->insert([
            'worker_id' => $worker_id,
            'job_id' => $job_id
        ]);
    }
}
