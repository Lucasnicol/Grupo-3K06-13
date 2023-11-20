import { useForm } from "react-hook-form";

export default function ModificarAnimal({ventanaModificacionRef, animal, cerrarVentanaModificacion, modificar }) {
    const { register, handleSubmit, formState:{errors} } = useForm();

    const onSubmit = async (data) => {
        await modificar(data)  
    };

    return (
    <div ref={ventanaModificacionRef} className="mt-3"> 
        <form  onSubmit={handleSubmit(onSubmit) } className="card p-3" >
            <h2  className="form-title text-center">
                MODIFICAR ANIMAL
            </h2>

            <input type="hidden" defaultValue={animal.IdAnimal} {...register("IdAnimal")} />

            <label className="form-label">Tipo de Animal:</label>
            <input type="text" className="form-control" defaultValue={animal.IdTipoAnimal} {...register("IdTipoAnimal",{required:true, pattern: /^[0-9]+$/ })} />
            {errors.IdTipoAnimal && errors.IdTipoAnimal.type === "pattern" && (<p className="text-danger">El campo debe ser numérico.</p>)}

            <label className="form-label">Dueño:</label>
            <input type="text" className="form-control" defaultValue={animal.IdCliente} {...register("IdCliente", {required:true, pattern: /^[0-9]+$/})}/>
            {errors.IdCliente && errors.IdCliente.type === "pattern" && (<p className="text-danger">El campo debe ser numérico.</p>)}

            <label className="form-label">Nombre Animal:</label>
            <input type="text" className="form-control" defaultValue={animal.NombreAnimal} {...register("NombreAnimal", {required:true, pattern:  /^[a-zA-Z]+$/})}/>
            {errors.NombreAnimal && errors.NombreAnimal.type === "pattern" && (<p className="text-danger">El campo debe ser Texto.</p>)}

            <label className="form-label">Fecha de Nacimiento:</label>
            <input type="text" className="form-control" defaultValue={new Date(animal.FechaNacAnimal).toISOString().split('T')[0]} {...register("FechaNacAnimal", {required:true, pattern: /^\d{4}-\d{2}-\d{2}$/})}/>
            {errors.FechaNacAnimal && errors.FechaNacAnimal.type === "pattern" && (<p className="text-danger">El campo debe tener el formato de fecha YYYY-MM-DD.</p>)}

            <label className="form-label">Peso:</label>
            <input type="text" className="form-control" defaultValue={animal.Peso} {...register("Peso", {required:true, pattern: /^\d+(\.\d+)?$/})}/>
            {errors.Peso && errors.Peso.type === "pattern" && (<p className="text-danger">El campo debe contener un valor numérico.</p>)}
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