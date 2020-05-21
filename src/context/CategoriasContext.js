// Ahora los datos fluyen desde este context, no desde app.js

import React, { createContext, useState } from "react";

// Crear el Context
export const CategoriasContext = createContext();
// createContext, crea el context y lo agregamos a la funcion CategoriasContext
// Siempre que se crea un context, se crea un provider,
// es desde donde van a salir (fluyen) los datos y las funciones
// que son consumidas en los componentes (header, formulario ...)

// Provider es donde se encuentran las funciones y el state
const CategoriasProvider = (props) => {
// siempre se le pasa props

  // Crear el state del context
  const [ saludo, guardarSaludo ] = useState('hola');

  return (
    <CategoriasContext.Provider
      value={{ //todo lo que se pone aqui, estara disponible en todos los componentes
        saludo
      }}
    >
    {/* Todos los componentes (app, formulario...) van a estar dentro de props.children y asi se pasan los datos */}
      {props.children}
    </CategoriasContext.Provider>
  )
}
export default CategoriasProvider;

