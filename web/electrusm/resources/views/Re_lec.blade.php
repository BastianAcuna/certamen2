@extends("layouts.master")

@section("contenido")
    
    <div class="row mt-5">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header bg-dark text-white">
                    <span>Electricidad</span>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="fecha-txt" class="form-label">Fecha</label>
                        <input type="date" id="fecha-txt" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="hora-txt" class="form-label">Hora</label>
                        <input type="string" class="form-control" id="hora-txt">
                    </div>
                    <div class="mb-3">
                        <label for="medidor-select">Medidor</label>
                        <select  id="medidor-select" class="form-select">
                            <option value=1>1</option>
                            <option value=2>2</option>
                            <option value=3>3</option>
                            <option value=4>4</option>
                            <option value=5>5</option>
                            <option value=6>6</option>
                            <option value=7>7</option>
                            <option value=8>8</option>
                            <option value=9>9</option>
                            <option value=10>10</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="direccion-txt" class="form-label">Direccion</label>
                        <input type="txt" id="direccion-txt" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="valor-txt" class="form-label">Valor</label>
                        <input type="number" class="form-control" id="valor-txt">
                    </div>
                    <div class="mb-3">
                        <label for="Umedida-select">Umedida</label>
                        <select  id="Umedida-select" class="form-select">
                            <option value=k>kilowatts</option>
                            <option value=w>watts</option>
                            <option value=t>temperatura</option>
                        </select>
                    </div>
                   
                </div>
                <div class="card-footer d-grid gap-1">
                    <button id="registrar-btn" class="btn btn-info">Registrar</button>
                </div>
            </div>
        </div>
    </div>

@endsection

@section("javascript")
    <script src="{{asset('js/servicios/LecturaService.js')}}"></script>
    <script src="{{asset('js/Re_lec.js')}}"></script>
@endsection