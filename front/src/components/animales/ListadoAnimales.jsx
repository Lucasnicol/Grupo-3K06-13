import FilaAnimal from "./FilaAnimal";

export default function ListadoAnimales({lista, borrar, abrirVentanaModificacion }){


    return (
        <div className="container mt-3">
            <table className="table table-striped">
                <thead>
                    <tr className="text-center">
                        <th>Id</th>
                        <th>Tipo de Animal</th>
                        <th>Id Dueño</th>
                        <th>Nombre</th>
                        <th>Fecha Nacimiento</th>
                        <th>Peso</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((animal)=>(

                        <FilaAnimal key={animal.IdAnimal} lista={animal} borrar={borrar}  abrirVentanaModificacion={abrirVentanaModificacion}/>
                    ))}

                

                </tbody>
                
            </table>
        </div>
    )
}