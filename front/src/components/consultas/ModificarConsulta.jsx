import { useForm } from "react-hook-form";

export default function ModificarConsulta({ventanaModificacionRef, consulta, cerrarVentanaModificacion, modificar }) {
    const { register, handleSubmit, formState:{errors} } = useForm();

    const onSubmit = async (data) => {
        await modificar(data)  
    };

    return (
    <div ref={ventanaModificacionRef} className="mt-3"> 
        <form  onSubmit={handleSubmit(onSubmit) } className="card p-3" >
            <h2  className="form-title text-center">
                MODIFICAR CONSULTA
            </h2>
            <label className="form-label">IdConsulta:</label>        
            <input type="text" readOnly className="form-control" defaultValue={consulta.IdConsulta} {...register("IdConsulta")} />

            <label className="form-label">Fecha:</label>
            <input type="text" className="form-control" defaultValue={consulta.Fecha} {...register("Fecha",{required:true, pattern: /^\d{4}-\d{2}-\d{2}$/ })} />
            {errors.Fecha && errors.Fecha.type === "pattern" && (<p className="text-danger">El campo debe tener el formato de fecha YYYY-MM-DD.</p>)}

            <label className="form-label">Observación:</label>
            <input type="text" className="form-control" defaultValue={consulta.Observacion} {...register("Observacion", {required:true, maxLength:50})}/>
            {errors.Observacion && errors.Observacion.type === "pattern" && (<p className="text-danger">El campo debe ser Texto, no mayor a 50 caracteres.</p>)}

            <label className="form-label">Precio:</label>
            <input type="text" className="form-control" defaultValue={consulta.Precio} {...register("Precio", {required:true, pattern: /^\d{2,5}$/})}/>
            {errors.Precio && errors.Precio.type === "pattern" && (<p className="text-danger">El campo debe contener un valor numérico</p>)}

            <label className="form-label">IdMascota:</label>
            <input type="text" className="form-control" defaultValue={consulta.IdMascota} {...register("IdMascota", {required:true, pattern: /^\d{1,5}$/})}/>
            {errors.IdMascota && errors.IdMascota.type === "pattern" && (<p className="text-danger">El campo debe contener un valor numérico</p>)}

            <label className="form-label">IdCliente:</label>
            <input type="text" className="form-control" defaultValue={consulta.IdCliente} {...register("IdCliente", {required:true, pattern: /^\d{1,5}$/})}/>
            {errors.IdCliente && errors.IdCliente.type === "pattern" && (<p className="text-danger">El campo debe contener un valor numérico</p>)}

            <label className="form-label">LegajoVeter:</label>
            <input type="text" className="form-control" defaultValue={consulta.LegajoVeter} {...register("LegajoVeter", {required:true, pattern: /^\d{4}$/})}/>
            {errors.LegajoVeter && errors.LegajoVeter.type === "pattern" && (<p className="text-danger">El campo debe contener un valor numérico de 4 digitos</p>)}

            <br />

            <div className="d-flex">
                <button type="submit" className="btn btn-dark m-1 w-50" >
                Guardar
                </button>
                <button type="button" className="btn btn-dark m-1 w-50" onClick={cerrarVentanaModificacion}>
                Volver
                </button>
            </div>

        </form>
    </div>   
    );
}