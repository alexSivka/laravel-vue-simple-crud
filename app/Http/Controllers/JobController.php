<?php

namespace App\Http\Controllers;
use App\Models\Worker;
use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class JobController extends Controller
{


    public function index()
    {
        echo Job::with('workers')->get()->toJson();
    }

    public function job(Request $request, $id = 0){

        $data = [
            'allWorkers' => Worker::select(['id', 'name'])->get(),
            'statuses' => Job::STATUSES
        ];

        if($id){

            $data['item'] = Job::with('workers')->find($id);

        }else{

            $job = new Job();
            $job->workers = [];
            $data['item'] = $job;

        }

        echo json_encode($data);
    }

    function save(Request $request){

        $item = $request->all();


        $job = Job::findOrNew($item['id']);


        $job->name = $item['name'];
        $job->description = $item['description'];
        $job->status = $item['status'];


        $job->save();


        $ids = !empty($item['workers']) ? array_map(function ($worker) {
            return $worker['id'];
        }, (array)$item['workers']) : [];

        $workers = Worker::find($ids);

        DB::table('worker_jobs')->where('job_id', $item['id'])->delete();

        if($workers->count()) $job->workers()->saveMany($workers);


    }
}