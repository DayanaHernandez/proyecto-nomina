import "./liquidacion.css";

function Liquidacion() {
  return (
    <section>
      <div className="container-liquidacion">
        <button className="button-one">Liquidación por días</button>
        <button className="button-two">Liquidación tiempo completo</button>
      </div>
      <div>
        <div className="principal"></div>
        <div className="buttons-liquidacion">
          <button className="empleado">Liquidación para empleado</button>
          <button className="empleador">Liquidación para empleador</button>
        </div>
      </div>
    </section>
  );
}
export default Liquidacion;
