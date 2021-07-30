
document.querySelector("#registrar-btn").addEventListener("click", async ()=>{
    let fecha = document.querySelector("#fecha-txt").value.trim();
    let hora = document.querySelector("#hora-txt").value.trim();
    let medidor = document.querySelector("#medidor-select").value.trim();
    let valor = document.querySelector("#valor-txt").value.trim();
    let Umedida = document.querySelector("#Umedida-select").value.trim();
    let errores = [];
    if( valor < 500 || valor<0){ 
        errores.push("El valor es incorrecto");
    }
    if(errores.length == 0){

        let Lectura = {};
        Lectura.fecha = document.querySelector("#fecha-txt").value.trim();
        Lectura.hora = document.querySelector("#hora-txt").value.trim();
        Lectura.medidor = document.querySelector("#medidor-select").value.trim();
        Lectura.valor = document.querySelector("#valor-txt").value.trim();
        Lectura.Umedida = document.querySelector("#Umedida-select").value.trim();
        let res = await crearConsola(consola); 
        await Swal.fire("Lectura Creada", "Lectura creada exitosamente", "info"); 
        window.location.href = "Med_ex";
    } else {
        Swal.fire({
            title: "Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });
    }
});