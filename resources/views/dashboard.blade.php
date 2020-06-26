@extends('layouts.main')

@section('content')

    <div class="title-block">
        <h3 class="title">@{{ header }}</h3>
    </div>

    <section class="section">
        <router-view></router-view>
    </section>
@endsection


