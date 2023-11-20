import React, {useState, useEffect, useRef} from "react";
import {useForm} from 'react-hook-form'
import ListadoClientes from "./ListadoClientes";
import {alta, baja, modificacion, consulta} from "./ClientesServices"
import ModificarCliente from "./ModificarCliente"
import RegistrarCliente from "./RegistrarCliente";

export default function Clientes(){

    const { register, handleSubmit } = useForm();
    const [lista, setLista] = useState(null);
    const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

    const ventanaRegistrarRef = useRef(null);
    const [ventanaRegistrarVisible, setVentanaRegistrarVisible] = useState(false);

    const [ventanaModificacionVisible, setVentanaModificacionVisible] = useState(false);
    const ventanaModificacionRef = useRef(null);


    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const res = await consulta({});
                setLista(res.data);
            } catch (error) {
                console.error(error);
            }
        };
    
        obtenerDatos();
    }, []);


    useEffect(() => {
        if (ventanaRegistrarVisible) {
            ventanaRegistrarRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [ventanaRegistrarVisible]);


    useEffect(() => {
        if (!ventanaModificacionVisible) {
            setClienteSeleccionado(null);
        }
    }, [ventanaModificacionVisible]);

    useEffect(() => {
        if (ventanaModificacionVisible) {
            ventanaModificacionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [ventanaModificacionVisible]);

    const onSubmit = async (data) => {
        try {
                const res = await consulta(data)
                setLista(res.data);
            
        } catch (error) {
            console.error(error);
        }
    };

    const registrar = async function(data){
        await alta(data);
        cerrarVentanaRegistrar();
        const res = await consulta({});
        setLista(res.data);
    }
        
    const borrar = async function(id) {
        await baja(id);
        const res = await consulta({});
        setLista(res.data);
    }

    const modificar = async function(data){
        await modificacion(data)
        cerrarVentanaModificacion();
        const res = await consulta({});
        setLista(res.data);
    }

    const abrirVentanaRegistrar = (cliente) => {
        setVentanaRegistrarVisible(true);
        setVentanaModificacionVisible(false);
    };

    const cerrarVentanaRegistrar = () => {
        setVentanaRegistrarVisible(false);
    };


    const abrirVentanaModificacion = (id) => {
        if(!ventanaRegistrarVisible){
            setClienteSeleccionado(id);
            setVentanaModificacionVisible(true);
        } else {               
            setClienteSeleccionado(id);
            setVentanaModificacionVisible(true)
        }
        
        setVentanaRegistrarVisible(false);
    };
    
    const cerrarVentanaModificacion = () => {
        setVentanaModificacionVisible(false);
    };



    return(
        <div className="container">
            <h1>Clientes</h1>
            <hr/>


            <div>
                <div className="card mb-3">
                    <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="form-title text-center">
                            BUSCAR CLIENTE
                        </h2>
                        <hr/>
                        <div className="mb-3">
                            <label className="form-label">Id del cliente: </label>
                            <input type="text" className="form-control" {...register('id')} />
                        </div>
                        <button type="submit" className="btn btn-primary" >
                        Buscar
                        </button>
                    </form>
                    </div>
                </div>
                {lista && <ListadoClientes lista={lista} borrar={borrar} modificar={modificar} abrirVentanaModificacion={abrirVentanaModificacion}/>}
                <button className="btn btn-primary mx-auto d-block btn-lg" onClick={abrirVentanaRegistrar}>Registrar un nuevo cliente</button>
            </div>
            <hr/>
            {ventanaRegistrarVisible && <RegistrarCliente ventanaRegistrarRef={ventanaRegistrarRef} cerrarVentanaRegistrar={cerrarVentanaRegistrar} alta={registrar}/>}
            
            {ventanaModificacionVisible && <ModificarCliente ventanaModificacionRef={ventanaModificacionRef} cliente={clienteSeleccionado} modificar={modificar} cerrarVentanaModificacion={cerrarVentanaModificacion} />}
        </div>

    )
}