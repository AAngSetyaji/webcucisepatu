<?php

use Illuminate\Support\Facades\Route;
use App\Livewire\Home;



Route::get('/', function () {
    return view('react');
});
