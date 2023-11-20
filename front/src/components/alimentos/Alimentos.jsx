import React, {useState, useEffect, useRef} from "react";
import {useForm} from 'react-hook-form'
import ListadoAlimentos from "./ListadoAlimentos";
import {alta, baja, modificacion, consulta} from "./AlimentosSevices"
import ModificarAlimento from "./ModificarAlimento"
import RegistrarAlimento from "./RegistarAlimento";

export default function Alimento(){

    const { register, handleSubmit } = useForm();
    const [lista, setLista] = useState(null);
    const [alimentoSeleccionado, setAlimentoSeleccionado] = useState(null);

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
            setAlimentoSeleccionado(null);
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

    const abrirVentanaRegistrar = (alimento) => {
        setVentanaRegistrarVisible(true);
        setVentanaModificacionVisible(false);
    };

    const cerrarVentanaRegistrar = () => {
        setVentanaRegistrarVisible(false);
    };


    const abrirVentanaModificacion = (alimento) => {
        if(!ventanaRegistrarVisible){
            setAlimentoSeleccionado(alimento);
            setVentanaModificacionVisible(true);
        } else {               
            setAlimentoSeleccionado(alimento);
            setVentanaModificacionVisible(true)
        }
        
        setVentanaRegistrarVisible(false);
    };
    
    const cerrarVentanaModificacion = () => {
        setVentanaModificacionVisible(false);
    };



    return(
        <div className="container">
            <h1>Alimentos</h1>
            <hr/>


            <div>
                <div className="card mb-3">
                    <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="form-title text-center">
                            BUSCAR ALIMENTO
                        </h2>
                        <hr/>
                        <div className="mb-3">
                            <label className="form-label">Id del alimento: </label>
                            <input type="text" className="form-control" {...register('IdAlimento')} />
                        </div>
                        <button type="submit" className="btn btn-primary" >
                        Buscar
                        </button>
                    </form>
                    </div>
                </div>
                {lista && <ListadoAlimentos lista={lista} borrar={borrar} modificar={modificar} abrirVentanaModificacion={abrirVentanaModificacion}/>}
                <button className="btn btn-primary mx-auto d-block btn-lg" onClick={abrirVentanaRegistrar}>Registrar un Nuevo Alimento</button>
            </div>
            <hr/>
            {ventanaRegistrarVisible && <RegistrarAlimento ventanaRegistrarRef={ventanaRegistrarRef} cerrarVentanaRegistrar={cerrarVentanaRegistrar} alta={registrar}/>}
            
            {ventanaModificacionVisible && <ModificarAlimento ventanaModificacionRef={ventanaModificacionRef} alimento={alimentoSeleccionado} modificar={modificar} cerrarVentanaModificacion={cerrarVentanaModificacion} />}
        </div>

    )
}
