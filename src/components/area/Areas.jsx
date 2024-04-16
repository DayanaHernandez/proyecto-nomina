import "../empleados/empleados.css";

function Areas() {
  return (
    <section>
      <div className="container-buttons">
        <button className="button-crear">Crear</button>
        <button className="button-editar">Editar</button>
        <button className="button-eliminar">Eliminar</button>
        <button className="button-activar">Activar</button>
      </div>
      <div>
        <div className="principal">
          <div className="button-principal">
            <button className="button-uno">Guardar</button>
            <button className="button-dos">Cancelar</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Areas;
