import React from 'react';

export default function FilaAlimento({lista, borrar, abrirVentanaModificacion}){
    const { IdAlimento, Marca, PrecioKilo, FechaLote, Recomendada} = lista;   

    return(
        <>
            <tr className="text-center" key={IdAlimento}>
                <td>{IdAlimento}</td>
                <td>{Marca}</td>
                <td>{PrecioKilo}</td>
                <td>{new Date(FechaLote).toISOString().split('T')[0]}</td>
                <td>{Recomendada}</td>
                <td>
                    <button className="btn primary-btn border m-1" onClick={()=> abrirVentanaModificacion(lista)}>✏️</button>
                    <button className="btn primary-btn border m-1" onClick={()=>(borrar(IdAlimento))}>❌</button>
                </td>
            </tr>
        </>

    );
};