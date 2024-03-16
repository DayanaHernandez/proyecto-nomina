import Menu from "../home/Menu"

function Loginh() {

    return (
      <section id="login" class="form-login">
        <img src="src/assets/logo.png" className="logo"/>
        <h5>Inicio de sesión</h5>
        <input type="text" name="username" id="username" class="controls" placeholder="Usuario" autocomplete="name" />
        <input type="password" name="password" id="password" class="controls" placeholder="Contraseña" maxlength="10" />
        <input type="button" id="loginButton" class="buttons" value="Ingresar" />

        <p><a href="#">¿Olvidastes tu Contraseña?</a></p>
    </section>
    )
  }
  
  export default Loginh
  