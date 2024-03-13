import './menu.css';

function Menu() {

    return (
      <nav className="menu">
        <img className="usuario"src=''></img>
        <section className='informacion-usuario' >
        <label type="text" >Nombre: </label>
        <label type="text">Cargo: </label>
        <label type="text">Area: </label>
        </section>
        <button >Empleados</button>
        <button >Liquidación</button>
        </nav>
  
    )
  }
  
  export default Menu