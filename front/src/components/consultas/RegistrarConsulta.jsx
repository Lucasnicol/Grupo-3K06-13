import React from "react";
import {useForm} from 'react-hook-form';


export default function RegistrarConsulta({ventanaRegistrarRef, cerrarVentanaRegistrar, alta}){
    
    const { register, handleSubmit, formState:{errors} } = useForm();
    const onSubmit= (data)=>{
        alta(data)
    }

    return (
        <div ref={ventanaRegistrarRef} className="mt-3 border-0"> 
            <form onSubmit={handleSubmit(onSubmit) } className="card p-3" >
                <table className="table table-striped square border border-3 border-dark">
                    <tr className="bg-dark p-3">
                        <th colSpan={2}>
                        <h4  className="form-title text-center text-light m-3">
                            REGISTRAR CONSULTA
                        </h4>
                        </th>
                    </tr>
                    <tr>
                        <td className="d-flex p-2">
                            <label className="form-label ps-5 fw-bold">Fecha:</label>    
                        </td><td className="p-2 w-75">
                            <input type="text" className="form-control" defaultValue={""} {...register("Fecha",{required:true, pattern: /^\d{4}-\d{2}-\d{2}$/ })}/>
                            {errors.Fecha && errors.Fecha.type === "pattern" && (<p className="text-danger">El campo debe tener el formato de fecha YYYY-MM-DD.</p>)}
                        </td>
                    </tr>
                    <tr>
                        <td className="d-flex p-2">
                            <label className="form-label ps-5 fw-bold">Observación:</label>
                        </td><td className="p-2 w-75">
                            <input type="text" className="form-control" defaultValue={""} {...register("Observacion", {required:true, maxLength:50})}/>
                            {errors.Observacion && errors.Observacion.type === "pattern" && (<p className="text-danger">El campo debe ser Texto, no mayor a 50 caracteres.</p>)}
                        </td>
                    </tr>
                    <tr>
                        <td className="d-flex p-2">
                            <label className="form-label ps-5 fw-bold">Precio:</label>
                        </td><td className="p-2 w-75">
                            <input type="text" className="form-control" defaultValue={""} {...register("Precio", {required:true, pattern: /^\d{2,5}/})}/>
                            {errors.Precio && errors.Precio.type === "pattern" && (<p className="text-danger">El campo debe contener un valor numérico</p>)}
                        </td>
                    </tr>
                    <tr>
                        <td className="d-flex p-2">
                            <label className="form-label ps-5 fw-bold">IdMascota:</label>
                        </td><td className="p-2 w-75">
                            <input type="text" className="form-control" defaultValue={""} {...register("IdMascota", {required:true, pattern: /^\d{1,5}$/})}/>
                            {errors.IdMascota && errors.IdMascota.type === "pattern" && (<p className="text-danger">El campo debe contener un valor numérico</p>)}
                        </td>
                    </tr>
                    <tr>
                        <td className="d-flex p-2">
                            <label className="form-label ps-5 fw-bold">IdCliente:</label>
                        </td><td className="p-2 w-75">
                            <input type="text" className="form-control" defaultValue={""} {...register("IdCliente", {required:true, pattern: /^\d{1,5}$/})}/>
                            {errors.IdCliente && errors.IdCliente.type === "pattern" && (<p className="text-danger">El campo debe contener un valor numérico</p>)}
                        </td>
                    </tr>
                    <tr>
                        <td className="d-flex p-2">
                            <label className="form-label ps-5 fw-bold">LegajoVeter:</label>
                        </td><td className="p-2 w-75">
                            <input type="text" className="form-control" defaultValue={""} {...register("LegajoVeter", {required:true, pattern: /^\d{4}$/})}/>
                            {errors.LegajoVeter && errors.LegajoVeter.type === "pattern" && (<p className="text-danger">El campo debe contener un valor numérico de 4 digitos</p>)}
                        </td>
                    </tr>
                </table>
                <div className="d-flex">
                    <button type="button" className="btn btn-dark m-1 w-50" onClick={cerrarVentanaRegistrar}>
                    Volver
                    </button>
                    <button type="submit" className="btn btn-dark m-1 w-50" >
                    Guardar
                    </button>
                </div>

            </form>
        </div>  
        
    );

};