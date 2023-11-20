import React from "react";
import {useForm} from 'react-hook-form';
export default function RegistrarAlimento({ventanaRegistrarRef, cerrarVentanaRegistrar, alta}){
    const { register, handleSubmit, formState:{errors} } = useForm();
    const onSubmit= (data)=>{
        alta(data)
    }

    return (
        <div ref={ventanaRegistrarRef} className="mt-3"> 
            <form onSubmit={handleSubmit(onSubmit) } className="card p-3" >
                <h2  className="form-title text-center">
                    REGISTRAR ALIMENTO
                </h2>

                <label className="form-label">Marca:</label>
                <input type="text" className="form-control" placeholder="Marca" defaultValue={""} {...register("Marca",{required:true, pattern: /^[a-zA-Z]+$/ })} />
                {errors.Marca && errors.Marca.type === "pattern" && (<p className="text-danger">El campo debe ser texto.</p>)}

                <label className="form-label">Precio por Kilo:</label>
                <input type="text" className="form-control" placeholder="PrecioKilo" defaultValue={""} {...register("PrecioKilo", {required:true, pattern: /^\d[0-9]+$/})}/>
                {errors.PrecioKilo && errors.PrecioKilo.type === "pattern" && (<p className="text-danger">El campo debe ser numérico.</p>)}

                <label className="form-label">Fecha del Lote:</label>
                <input type="text" className="form-control" placeholder="FechaLote (Formato: YYYY-MM-DD)" defaultValue={""}  {...register("FechaLote", {required:true, pattern: /^\d{4}-\d{2}-\d{2}$/})}/>
                {errors.FechaLote && errors.FechaLote.type === "pattern" && (<p className="text-danger">El campo debe tener el formato de fecha YYYY-MM-DD.</p>)}

                <label className="form-label">Recomendada:</label>
                <input type="text" className="form-control" placeholder="Recomendada" defaultValue={""}  {...register("Recomendada", {required:true, pattern: /^[a-zA-Z]+$/ })} />
                {errors.Recomendada && errors.Recomendada.type === "pattern" && (<p className="text-danger">El campo debe ser texto.</p>)}
                <br />

                <button type="submit" className="btn btn-secondary m-1" >
                Guardar
                </button>
                <button type="button" className="btn btn-secondary m-1" onClick={cerrarVentanaRegistrar}>
                Volver
                </button>


            </form>
        </div>  
        
    );

};