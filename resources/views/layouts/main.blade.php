<!DOCTYPE html>
<!--
* CoreUI - Free Bootstrap Admin Template
* @version v3.0.0-alpha.1
* @link https://coreui.io
* Copyright (c) 2019 creativeLabs Łukasz Holeczek
* Licensed under MIT (https://coreui.io/license)
-->

<html lang="en">
<head>
    <base href="./">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="description" content="">
    <title>User-tasks</title>

    <link rel="stylesheet" href="/css/vendor.css">
    <link href="/css/theme.css" rel="stylesheet">
</head>



<body>


<div class="main-wrapper">
    <div class="app" id="app">

        @include('partials.header')

        @include('partials.sidebar')

        <article class="content">
            @yield('content')
        </article>

        @include('partials.footer')

    </div>
</div>


<script src="/js/app.js"></script>


<script src="/js/theme.js"></script>




</body>
</html>
