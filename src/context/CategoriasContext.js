// Ahora los datos fluyen desde este context, no desde app.js

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

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
  const [ categorias, guardarCategorias ] = useState();

  // ejecutar la llamada a la API
  // para ello usamos useEffect y Axios
  // como solo lo queremos ejecutar una vez, las dependencias estaran vacias ( el array al final de la funcion)
  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

      const categorias = await axios.get(url);

      // console.log(categorias); de aqui vemos que es un objeto aqccedemos: data.drinks
      guardarCategorias(categorias.data.drinks); // guardamos las categorias en el state


    }
    obtenerCategorias();

  }, []);

  return (
    <CategoriasContext.Provider
      value={{ //todo lo que se pone aqui, estara disponible en todos los componentes
        categorias
      }}
    >
    {/* Todos los componentes (app, formulario...) van a estar dentro de props.children y asi se pasan los datos */}
      {props.children}
    </CategoriasContext.Provider>
  )
}
export default CategoriasProvider;

