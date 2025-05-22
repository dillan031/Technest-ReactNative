import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styles from './Contraseña.css';

export default function Contraseña() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes llamar a tu API o lógica de recuperación
    setMessage("Si el correo está registrado, recibirás un enlace de recuperación.");
  };

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Recuperar Contraseña - TECHNEST</title>
        <link rel="stylesheet" href="forgot-password.css" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="max-w-md w-full bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Recuperar Contraseña</h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Introduce tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo Electrónico:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ejemplo@correo.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Enviar enlace de recuperación
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-sm text-green-600">{message}</p>
          )}

          <p className="mt-4 text-center">
            <a href="/login" className="text-blue-600 hover:underline">
              Volver al inicio de sesión
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
