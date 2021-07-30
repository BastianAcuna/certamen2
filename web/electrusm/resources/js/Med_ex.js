
const Eliminar = async function(){

    let id = this.idConsola;
    let resp = await Swal.fire({title:"Esta seguro?", text:"Esta operacion es irreversible"
    , icon:"error", showCancelButton:true});
    if(resp.isConfirmed){

   
        if(await eliminarLectura(id)){

            let lectura = await getLectura();
            cargarLectura(lectura);
            Swal.fire("Lectura Eliminada", "Lectura eliminada exitosamente", "info");
        }else {
        
            Swal.fire("Error", "No se pudo atender la solicitud", "error");
        }
    } else {
        Swal.fire("Cancelado", "Cancelado a peticion del usuario", "info");
    }
};

const cargarLectura = (Lectura)=>{
 
    let tbody = document.querySelector("#tbody-Lectura");
    tbody.innerHTML = "";

    for(let i=0; i < Lectura.length; ++i){
        let tr = document.createElement("tr");
        let tdFecha = document.createElement("td");
        tdFecha.innerText = consolas[i].nombre;
        let tdHora = document.createElement("td");
        tdHora.innerText = consolas[i].Hora;
        let tdMedidor = document.createElement("td");
        tdMedidor.innerText  = consolas[i].Medidor;
        let tdValor = document.createElement("td");
        tdValor.innerText  = consolas[i].Valor;
        let tdUmedida = document.createElement("td");
        tdUmedida.innerText  = consolas[i].Umedida;
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText= "Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idLectura = Lectura[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);

        tr.appendChild(tdFecha);
        tr.appendChild(tdHora);
        tr.appendChild(tdMedidor);
        tr.appendChild(tdValor);
        tr.appendChild(tdUmedida);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }

};

document.querySelector("#filtro-cbx").addEventListener("change", async ()=>{
    let filtro = document.querySelector("#filtro-cbx").value;
    let Lectura = await getLectura(filtro);
    cargarLecura(Lectura);
});

document.addEventListener("DOMContentLoaded", async ()=>{
    await cargarLectura();
    let Lectura = await getLectura();
    cargarTabla(Lectura);
});