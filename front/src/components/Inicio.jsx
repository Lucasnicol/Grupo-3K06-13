import React from "react";

function Inicio() {
  return (
    <div className="container">
      <h1>Inicio</h1>
      <hr />
      <div
        className="mt-4 p-5 rounded"
        style={{ backgroundColor: "lightgray" }}
      >
        <h3>Trabajo Practico Integrador</h3>
        <h5>Etapa 2 - FrontEnd</h5><br></br>
        <div>
          <h4>Enunciado:</h4>

          <p>Realizar un ejercicio grupal en el repositorio de Gitlab. El objetivo es implementar el frontend de una aplicación utilizando tecnologías HTML, CSS mediante la librería React.</p> 
          <p>Dicha aplicación web complementará el backend realizado previamente en la ejercitación grupal anterior, análogamente cada integrante del grupo deberá hacer la interfaz web para permitir hacer el Alta, Baja, Modificación y Consulta (ABMC=CRUD) de los recursos expuestos por la Api Rest o Web Api desarrollada. </p>
          <p>Para ello, pueden basarse en el modelo de frontend de Artículos que se implementó en paso a paso del material. </p>
          <p>Junto a la funcionalidad del ABMC, y para facilitar las consultas y/o modificaciones, se deberá implementar una búsqueda filtrando al menos una propiedad tipo string del recurso y mostrar el conjunto resultante de la misma a en una tabla.</p>
          <p>El uso de paginación, o inicio de sesión se plantea como opcional y cada grupo es libre de implementar dichos conceptos o no. De estar correctamente implementados suman y si no se implementan no restan.</p>

        </div>
        <table className="table table-striped square border border-3 border-dark text-center">
          <tr className="bg-dark">
            <th colSpan={3}>
              <h3 className="text-light">INTEGRANTES</h3>
            </th>
          </tr>
          <tr className="bg-dark bg-opacity-75">
            <th className="text-light w-25">Legajo</th>
            <th className="text-light w-50">Nombre Completo</th>
            <th className="text-light w-25">Tabla</th>
          </tr>
          <tr>
            <td className="p-2">74907</td>
            <td className="p-2">Gastiaburu Lucas</td>
            <td className="p-2">Consultas y Alimentos</td>
          </tr>
          <tr>
            <td className="p-2">75043</td>
            <td className="p-2">Orne Bacci</td>
            <td className="p-2">Animales</td>
          </tr>
          <tr>
            <td className="p-2">66046</td>
            <td className="p-2">carbone Lucas</td>
            <td className="p-2">Clientes</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export { Inicio };
