import React from "react";

export default function FilaConsulta({lista, borrar, abrirVentanaModificacion}){
    const { IdConsulta, Fecha, Observacion, Precio, IdMascota, IdCliente, LegajoVeter } = lista;   

    return(
        <>
            <tr className="text-center" key={IdConsulta}>
                <td>{IdConsulta}</td>
                <td>{new Date(Fecha).toISOString().split('T')[0]}</td>
                <td>{Observacion}</td>
                <td>{'$' + Precio}</td>
                <td>{IdMascota}</td>
                <td>{IdCliente}</td>
                <td>{LegajoVeter}</td>
                <td className="d-flex">
                    <button className="btn primary-btn border m-1" 
                    onClick={()=> abrirVentanaModificacion(lista)}>✏️</button>
                    
                    <button className="btn primary-btn border m-1" 
                    onClick={()=>(borrar(IdConsulta))}>❌</button>
                </td>
            </tr>

        </>

    );
};