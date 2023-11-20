import axios from "axios";

async function alta(data) {
    try {
        return await axios.post('http://localhost:3500/api/alimentos/', data);
    } catch (error) {
        console.error(error);
    }
};
async function baja(id){
    const res = await axios.delete('http://localhost:3500/api/alimentos/'+id)
    return res.status === 200
};


async function modificacion(data){
    try{
        const res = await axios.put('http://localhost:3500/api/alimentos/'+ data.IdAlimento, data)
        return res.data
    } catch(error){
        console.error(error);
    }

};


async function consulta(data){
    return await axios.get('http://localhost:3500/api/alimentos', {
        params: data,
    });
};

export { alta, baja, modificacion, consulta,}