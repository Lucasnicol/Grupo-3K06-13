import { useForm } from "react-hook-form";

export default function ModificarAlimento({ventanaModificacionRef, alimento, cerrarVentanaModificacion, modificar }) {
    const { register, handleSubmit, formState:{errors} } = useForm();

    const onSubmit = async (data) => {
        await modificar(data)  
    };

    return (
    <div ref={ventanaModificacionRef} className="mt-3"> 
        <form  onSubmit={handleSubmit(onSubmit) } className="card p-3" >
            <h2  className="form-title text-center">
                MODIFICAR ALIMENTO
            </h2>

            <input type="hidden" defaultValue={alimento.IdAlimento} {...register("IdAlimento")} />

            <label className="form-label">Marca:</label>
            <input type="text" className="form-control" defaultValue={alimento.Marca} {...register("Marca",{required:true, pattern: /^[a-zA-Z\s]+$/ })} />
            {errors.Marca && errors.Marca.type === "pattern" && (<p className="text-danger">El campo debe ser texto.</p>)}

            <label className="form-label">Precio por Kilo:</label>
            <input type="text" className="form-control" defaultValue={alimento.PrecioKilo} {...register("PrecioKilo", {required:true, pattern: /^\d[0-9]+$/})}/>
            {errors.PrecioKilo && errors.PrecioKilo.type === "pattern" && (<p className="text-danger">El campo debe ser numérico.</p>)}

            <label className="form-label">Fecha del Lote:</label>
            <input type="text" className="form-control" defaultValue={new Date(alimento.FechaLote).toISOString().split('T')[0]} {...register("FechaLote", {required:true, pattern: /^\d{4}-\d{2}-\d{2}$/})}/>
            {errors.FechaLote && errors.FechaLote.type === "pattern" && (<p className="text-danger">El campo debe tener el formato de fecha YYYY-MM-DD.</p>)}

            <label className="form-label">Recomendada:</label>
            <input type="text" className="form-control" defaultValue={alimento.Recomendada} {...register("Recomendada", {required:true, pattern: /^[a-zA-Z\s]+$/ })} />
            {errors.Recomendada && errors.Recomendada.type === "pattern" && (<p className="text-danger">El campo debe ser un texto.</p>)}
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