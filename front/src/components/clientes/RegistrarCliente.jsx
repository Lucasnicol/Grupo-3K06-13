import React from "react";  
import {useForm} from 'react-hook-form';

export default function RegistrarCliente({ventanaRegistrarRef, cerrarVentanaRegistrar, alta}){  
      
    const { register, handleSubmit, formState:{errors} } = useForm();  
    
    
    const onSubmit= (data)=>{  
        alta(data);  
        alert(`El cliente ${data.nombre+' '+data.apellido} ha sido creado con éxito`);  
    }

    return (  
        <div ref={ventanaRegistrarRef} className="mt-3">   
            <form onSubmit={handleSubmit(onSubmit) } className="card p-3" >  
                <h2  className="form-title text-center">  
                    REGISTRAR CLIENTE  
                </h2>

                <label className="form-label">Apellido:</label>  
                <input type="text" className="form-control" defaultValue={""} {...register("apellido",{required:true})} />  
                

                <label className="form-label">Nombre:</label>  
                <input type="text" className="form-control" defaultValue={""} {...register("nombre", {required:true})}/>  
                

                <label className="form-label">Fecha de nacimiento:</label>  
                <input type="text" className="form-control" defaultValue={""} {...register("fechaNacimiento", {required:true, pattern: /^\d{4}-\d{2}-\d{2}$/})}/>  
                {errors.fechaNacimiento && errors.fechaNacimiento.type === "pattern" && (<p className="text-danger">La fecha debe tener el formato de fecha YYYY-MM-DD.</p>)}

                <label className="form-label">Direccion:</label>  
                <input type="text" className="form-control" defaultValue={""} {...register("direccion", {required:true})}/>  
                {errors.direccion && errors.direccion.type === "pattern" && (<p className="text-danger">El campo direccion es obligatoria.</p>)}  
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