<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Lectura;

class LecturaController extends Controller
{
    public function getLectura(){
        $lectura = Lectura::all();
        return $lectura;
    }
    
    public function filtrarLectura(Request $request){
        $input = $request->all();
        $filtro = $input["filtro"];
        $lectura = Consola::where("Umedida", $filtro)->get();
        return $lectura;
    }


 
    public function crearLectura(Request $request){

        $input = $request->all(); 
        $lectura = new Consola();
        $lectura->nombre = $input["fecha"];
        $lectura->marca = $input["hora"];
        $lectura->anio = $input["medidor"];
        $lectura->nombre = $input["valor"];
        $lectura->marca = $input["Umedida"];
        $consola->save();
        return $consola;
    }
    public function eliminarLectura(Request $request){
        $input = $request->all();
        $id = $input["id"];
    
        $lectura = Lectura::findOrFail($id);
      
        $lectura->delete(); 
        return "ok";
    }

}

