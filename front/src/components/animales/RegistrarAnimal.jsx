import React from "react";
import {useForm} from 'react-hook-form';
export default function RegistrarAnimal({ventanaRegistrarRef, cerrarVentanaRegistrar, alta}){
    const { register, handleSubmit, formState:{errors} } = useForm();
    const onSubmit= (data)=>{
        alta(data)
    }

    return (
        <div ref={ventanaRegistrarRef} className="mt-3"> 
            <form onSubmit={handleSubmit(onSubmit) } className="card p-3" >
                <h2  className="form-title text-center">
                    REGISTRAR ANIMAL
                </h2>

                <label className="form-label">Tipo de Animal:</label>
                <input type="text" className="form-control" placeholder="Id Tipo Animal" defaultValue={""} {...register("IdTipoAnimal",{required:true, pattern: /^[0-9]+$/ })} />
                {errors.IdTipoAnimal && errors.IdTipoAnimal.type === "pattern" && (<p className="text-danger">El campo debe ser numérico.</p>)}

                <label className="form-label">Dueño:</label>
                <input type="text" className="form-control" placeholder="Id Cliente" defaultValue={""} {...register("IdCliente", {required:true, pattern: /^[0-9]+$/})}/>
                {errors.IdCliente && errors.IdCliente.type === "pattern" && (<p className="text-danger">El campo debe ser numérico.</p>)}

                <label className="form-label">Nombre Animal:</label>
                <input type="text" className="form-control" placeholder="Nombre Animal" defaultValue={""}  {...register("NombreAnimal", {required:true, pattern:  /^[a-zA-Z]+$/})}/>
                {errors.NombreAnimal && errors.NombreAnimal.type === "pattern" && (<p className="text-danger">El campo debe ser Texto.</p>)}

                <label className="form-label">Fecha de Nacimiento:</label>
                <input type="text" className="form-control" placeholder="Fecha de Nacimiento (Formato: YYYY-MM-DD)" defaultValue={""}  {...register("FechaNacAnimal", {required:true, pattern: /^\d{4}-\d{2}-\d{2}$/})}/>
                {errors.FechaNacAnimal && errors.FechaNacAnimal.type === "pattern" && (<p className="text-danger">El campo debe tener el formato de fecha YYYY-MM-DD.</p>)}

                <label className="form-label">Peso:</label>
                <input type="text" className="form-control" placeholder="Peso" defaultValue={""}  {...register("Peso", {required:true, pattern: /^\d+(\.\d+)?$/})}/>
                {errors.Peso && errors.Peso.type === "pattern" && (<p className="text-danger">El campo debe contener un valor numérico.</p>)}
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