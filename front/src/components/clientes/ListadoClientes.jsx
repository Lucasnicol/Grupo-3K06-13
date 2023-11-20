import FilaCliente from "./FilaCliente";

export default function ListadoClientes({lista, borrar, abrirVentanaModificacion }){

    return (
        <div className="container mt-3">
            <table className="table table-striped">
                <thead>
                    <tr className="text-center">
                    <td>Id</td>
                    <td>Apellido</td>
                    <td>Nombre</td>
                    <td>Fecha de nacimiento</td>
                    <td>Direccion</td>
                    </tr>
                </thead>
                <tbody>
                    {lista && lista.map((cliente)=>(

                        <FilaCliente key={cliente.id} lista={cliente} 
                        borrar={borrar}  abrirVentanaModificacion={abrirVentanaModificacion}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}