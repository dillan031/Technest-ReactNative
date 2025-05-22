import React from "react";
import { Helmet } from "react-helmet";
import styles from './Registro.css'
    
class Registro extends React.Component{
    render(){
        return (
            <>
        <Helmet>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Registro - TECHNEST</title>
          <link rel="icon" href="logo.ico" />
        </Helmet>

        <div className="register-container">
          <h2>Crear Cuenta</h2>
          <form action="registro_usuario_be.php" method="post" id="register-form">
            <label htmlFor="fullname">Nombre Completo:</label>
            <input type="text" id="fullname" name="fullname" required />

            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Número de Teléfono:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{10}"
              title="Debe contener 10 dígitos"
              required
            />

            <label htmlFor="password">Contraseña:</label>
            <div className="password-container">
              <input type="password" id="password" name="password" required minLength={8} />
              <span
                className="toggle-password"
                onClick={() => this.togglePassword("password")}
              ></span>
            </div>

            <label htmlFor="confirm-password">Confirmar Contraseña:</label>
            <div className="password-container">
              <input type="password" id="confirm-password" name="confirm-password" required />
              <span
                className="toggle-password"
                onClick={() => this.togglePassword("confirm-password")}
              ></span>
            </div>

            <p id="password-error" className="error-message"></p>
            <button type="submit">Registrarse</button>
          </form>
          <p>
            ¿Ya tienes una cuenta? <a href="Login">Inicia sesión aquí</a>
          </p>
        </div>
      </>
    );
  }
}

export default Registro;