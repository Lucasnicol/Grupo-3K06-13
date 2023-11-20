import FilaConsulta from "./FilaConsulta";

export default function ListadoConsultas({lista, borrar, abrirVentanaModificacion }){

    return (
        <div className="container mt-3">
            <table className="table table-striped square border border-3 border-dark">
                <thead>
                    <tr className="text-center bg-dark square border border-3 border-dark">
                    <td className="text-light fw-bold">IdConsulta</td>
                    <td className="text-light fw-bold">Fecha</td>
                    <td className="text-light fw-bold">Observación</td>
                    <td className="text-light fw-bold">Precio</td>
                    <td className="text-light fw-bold">IdMascota</td>
                    <td className="text-light fw-bold">IdCliente</td>
                    <td className="text-light fw-bold">LegajoVeter</td>
                    <td className="text-light fw-bold"></td>
                    </tr>
                </thead>
                <tbody>
                    {lista && lista.map((consulta)=>(

                        <FilaConsulta key={consulta.IdConsulta} lista={consulta} 
                        borrar={borrar}  abrirVentanaModificacion={abrirVentanaModificacion}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}