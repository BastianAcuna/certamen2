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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get("Lectura/get", [Lecturaontroller::class, "getLectura"]);
Route::get("Lectura/filtrar", [Lecturaontroller::class, "filtrarLectura"]);

Route::post("Lectura/post", [Lecturaontroller::class,"crearLectura"]);
Route::post("Lectura/delete", [Lecturaontroller::class,"eliminarLectura"]);
