import React from 'react';

export default function FilaCliente({lista, borrar, abrirVentanaModificacion}){
    const { id, apellido, nombre, fechaNacimiento, direccion } = lista;   

    return(
        <>
            <tr className="text-center" key={id}>
                <td>{id}</td>
                <td>{apellido}</td>
                <td>{nombre}</td>
                <td>{new Date(fechaNacimiento).toISOString().split('T')[0]}</td>
                <td>{direccion}</td>
                <td>
                <button className="btn primary-btn border m-1"   
                    onClick={()=> abrirVentanaModificacion(lista)}>✏️</button>  
                      
                    <button className="btn primary-btn border m-1"   
                    onClick={()=>{  
                        borrar(id);  
                        alert(`El cliente ${id} ha sido borrado con éxito`);  
                    }}>❌</button>  
                </td>
            </tr>
        </>

    );
};