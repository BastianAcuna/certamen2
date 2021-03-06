const getLectura = async (filtro ="todos")=>{
    let resp;
    if(filtro == "todos"){
        resp = await axios.get("api/Lectura/get");
    }else {
        resp = await axios.get(`api/Lectura/filtrar?filtro=${filtro}`);
    }
    return resp.data;
};
const crearLectura = async (lectura)=>{
    
    let resp = await axios.post("api/Lectura/post", lectura, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return resp.data;
};

const eliminarLectura = async(id)=>{
    try{
        let resp = await axios.post("api/Lectura/delete", {id}, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
    
}