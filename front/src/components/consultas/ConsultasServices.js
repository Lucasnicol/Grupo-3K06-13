import axios from "axios";

async function alta(data){
    return await axios.post('http://localhost:3500/api/consultas', data)
};

async function baja(IdConsulta){
    const res = await axios.delete('http://localhost:3500/api/consultas/'+IdConsulta)
    return res.status === 200
};

async function modificacion(data){
    try{
        const res = await axios.put('http://localhost:3500/api/consultas/'+ data.IdConsulta, data)
        return res.data
    } catch(error){
        console.error(error);
    }
};

async function consulta(data){
    return await axios.get('http://localhost:3500/api/consultas', {
        params: data,
    });
};


export { alta, baja, modificacion, consulta,}