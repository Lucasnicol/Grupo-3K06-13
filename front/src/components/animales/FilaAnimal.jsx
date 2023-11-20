import React from 'react';

export default function FilaAnimal({lista, borrar, abrirVentanaModificacion}){
    const { IdAnimal, IdTipoAnimal, IdCliente, NombreAnimal, FechaNacAnimal, Peso } = lista;   

    return(
        <>
            <tr className="text-center" key={IdAnimal}>
                <td>{IdAnimal}</td>
                <td>{IdTipoAnimal}</td>
                <td>{IdCliente}</td>
                <td>{NombreAnimal}</td>
                <td>{new Date(FechaNacAnimal).toISOString().split('T')[0]}</td>
                <td>{Peso}</td>
                <td>
                    <button className="btn primary-btn border m-1" onClick={()=> abrirVentanaModificacion(lista)}>✏️</button>
                    <button className="btn primary-btn border m-1" onClick={()=>(borrar(IdAnimal))}>❌</button>
                </td>
            </tr>
        </>

    );
};