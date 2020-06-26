<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::get('/workers', 'WorkerController@index');
Route::get('/worker/{id}', 'WorkerController@worker');
Route::post('/worker/save', 'WorkerController@save');
Route::get('/worker', 'WorkerController@worker');

Route::get('/jobs', 'JobController@index');
Route::get('/job/{id}', 'JobController@job');
Route::post('/job/save', 'JobController@save');
Route::get('/job', 'JobController@job');
