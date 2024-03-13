import Menu from "../home/Menu"

function Loginh() {

    return (
      <section className="contenido">
        <img src="src/assets/logo.png" className="logo"/>
        <input className="control" type="text" placeholder="Usuario" name="usuario"/>
        <input class="control" type="password" placeholder="Contraseña" name="contraseña" />
        <input id="btnIniciar" class="buttons" type="button" value="Ingresar"/>
        <p><a href="#">¿Olvidaste la contraseña?</a></p>
      </section>
    
    )
  }
  
  export default Loginh
  