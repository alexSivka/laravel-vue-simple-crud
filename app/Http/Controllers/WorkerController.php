<?php

namespace App\Http\Controllers;
use App\Models\Worker;
use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class WorkerController extends Controller
{


    public function index()
    {
        echo Worker::with('jobs')->get()->toJson();
    }

    public function worker(Request $request, $id = 0){

        $data = [
            'allJobs' => Job::select(['id', 'name'])->get()
        ];

        if($id){

            $data['item'] = Worker::with('jobs')->find($id);

        }else{

            $worker = new Worker();
            $worker->jobs = [];
            $data['item'] = $worker;

        }

        echo json_encode($data);
    }

    function save(Request $request){

        $item = json_decode($request->input('item'));

        $worker = Worker::findOrNew($item->id);

        if($request->hasFile('file')){
            $img = uniqid() . '.' . $request->file('file')->extension();
            $worker->img = '/img/' . $img;
            $request->file('file')->move(public_path() . '/img', $img);
        }

        $worker->name = $item->name;


        $worker->save();


        $ids = $item->jobs ? array_map(function ($job) {
            return $job->id;
        }, (array)$item->jobs) : [];

        $jobs = Job::find($ids);

        DB::table('worker_jobs')->where('worker_id', $item->id)->delete();

        if($jobs->count()) $worker->jobs()->saveMany($jobs);

        echo json_encode(['img' => $worker->img]);

    }
}