import React, { createContext, useState } from "react";


// Crear el Context
export const RecetasContext = createContext();

// Crear el Provider es donde se encuentran las funciones y el state
const RecetasProvider = (props) => {

  // vamos a tener 2 states:
  // uno para la busqueda
  const [ busqueda, guardarBusqueda ] = useState({
    nombre: '',
    categoria: ''
  })

  // otro para las recetas, que este sera el resultado de la busqueda
  const [ recetas, buscarRecetas ] = useState([

  ]);


  return (
    <RecetasContext.Provider
    value={{
      buscarRecetas
    }}>
      {props.children}
    </RecetasContext.Provider>
  );
}

export default RecetasProvider;