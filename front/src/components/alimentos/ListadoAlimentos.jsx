import FilaAlimento from "./FilaAlimento";

export default function ListadoAlimentos({lista, borrar, abrirVentanaModificacion }){


    return (
        <div className="container mt-3">
            <table className="table table-striped">
                <thead>
                    <tr className="text-center">
                        <th>Id</th>
                        <th>Marca</th>
                        <th>Precio por Kilo</th>
                        <th>Fecha del Lote</th>
                        <th>Recomendada</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((alimento)=>(

                        <FilaAlimento key={alimento.IdAlimento} lista={alimento} borrar={borrar}  abrirVentanaModificacion={abrirVentanaModificacion}/>
                    ))}

                

                </tbody>
                
            </table>
        </div>
    )
}