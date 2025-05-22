import React from "react";
import { Helmet } from "react-helmet";
import styles from './Login.css';

class Login extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Login - TECHNEST</title>
          <link rel="icon" href="logo.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
        </Helmet>

        <style>{`
          body {
            margin: 0;
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .login-wrapper {
            display: flex;
            width: 80%;
            max-width: 900px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 10px;
            overflow: hidden;
          }
          .login-container {
            padding: 40px;
            flex: 1;
            text-align: center;
          }
          .login-container h2 {
            margin-bottom: 10px;
          }
          .login-container input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: none;
            border-radius: 5px;
            outline: none;
          }
          .btn-login {
            width: 100%;
            padding: 10px;
            background: #00adb5;
            border: none;
            color: white;
            font-weight: bold;
            cursor: pointer;
            border-radius: 5px;
            transition: 0.3s;
          }
          .btn-login:hover {
            background: #008c9e;
          }
          .login-image {
            flex: 1;
            background: url('login-theme.png') no-repeat center center/cover;
          }
          .remember-me {
            margin-top: 10px;
            text-align: left;
          }
          .remember-me label {
            margin-left: 5px;
          }
        `}</style>

        <div className="login-wrapper">
          <div className="login-container">
            <h2>Bienvenido a TECHNEST</h2>
            <p>Ingresa tus credenciales para acceder</p>

            <form method="post" id="login-form">
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="usuario@correo.com"
                required
              />

              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                name="c"
                placeholder="********"
                required
              />

              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Recuérdame</label>
              </div>

              <button type="submit" className="btn-login">
                Iniciar Sesión
              </button>
            </form>

            <p>
              <a href="Contraseña">¿Olvidaste tu contraseña?</a>
            </p>
            <p>
              ¿No tienes una cuenta? <a href="Registro">Regístrate aquí</a>
            </p>
          </div>

          <div className="login-image"></div>
        </div>
      </>
    );
  }
}

export default Login;