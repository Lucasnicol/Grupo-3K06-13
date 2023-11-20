import { useForm } from "react-hook-form";

export default function ModificarCliente({ventanaModificacionRef, cliente, cerrarVentanaModificacion, modificar }) {  
    const { register, handleSubmit, formState:{errors} } = useForm();

    const onSubmit = async (data) => {  
        await modificar(data);  
        alert(`El id ${data.id} ha sido modificado con éxito`);  
    };

    return (  
    <div ref={ventanaModificacionRef} className="mt-3">   
        <form  onSubmit={handleSubmit(onSubmit) } className="card p-3" >  
            <h2  className="form-title text-center">  
                MODIFICAR CLIENTE  
            </h2>  
            <label className="form-label">id:</label>          
            <input type="text" className="form-control" readOnly defaultValue={cliente.id} {...register("id", {required:true})} />  
            {errors.id && errors.id.type === "pattern" && (<p className="text-danger"></p>)}

            <label className="form-label">apellido:</label>  
            <input type="text" className="form-control" defaultValue={cliente.apellido} {...register("apellido",{required:true})} />  
            {errors.apellido && errors.apellido.type === "pattern" && (<p className="text-danger">El apellido es obligatorio.</p>)}

            <label className="form-label">nombre:</label>  
            <input type="text" className="form-control" defaultValue={cliente.nombre} {...register("nombre", {required:true})}/>  
            {errors.nombre && errors.nombre.type === "pattern" && (<p className="text-danger">El nombre es obligatorio</p>)}

            <label className="form-label">FechaNacimiento:</label>  
            <input type="text" className="form-control" defaultValue={new Date(cliente.fechaNacimiento).toISOString().split('T')[0]} {...register("fechaNacimiento", {required:true, pattern: /^\d{4}-\d{2}-\d{2}$/})}/>  
            {errors.fechaNacimiento && errors.fechaNacimiento.type === "pattern" && (<p className="text-danger">La fecha de nacimiento debe tener el formato de fecha YYYY-MM-DD.</p>)}

            <label className="form-label">direccion:</label>  
            <input type="text" className="form-control" defaultValue={cliente.direccion} {...register("direccion", {required:true})}/>  
            {errors.direccion && errors.direccion.type === "pattern" && (<p className="text-danger">La direccion es obligatoria.</p>)}  
            <br />

            <button type="submit" className="btn btn-secondary m-1" >  
            Guardar  
            </button>  
            <button type="button" className="btn btn-secondary m-1" onClick={cerrarVentanaModificacion}>  
            Volver  
            </button>


        </form>  
    </div>     
    );  
}