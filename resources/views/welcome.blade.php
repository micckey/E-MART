<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,600&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('carousel/fonts/icomoon/style.css') }}">

    <link rel="stylesheet" href="{{ asset('carousel/css/owl.carousel.min.css') }}">
    

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ asset('carousel/css/bootstrap.min.css') }}">

    <!-- Style -->
    <link rel="stylesheet" href="{{ asset('carousel/css/style.css') }}">

    <title>E-MART</title>
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])


</head>

<body>
    <div id="app"></div>

    <script src="{{ asset('carousel/js/jquery-3.3.1.min.js') }}"></script>
    <script src="{{ asset('carousel/js/popper.min.js') }}"></script>
    <script src="{{ asset('carousel/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('carousel/js/owl.carousel.min.js') }}"></script>
    <script src="{{ asset('carousel/js/main.js') }}"></script>
</body>

</html>