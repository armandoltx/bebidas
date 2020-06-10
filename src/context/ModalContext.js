import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Crear el Context
export const ModalContext = createContext();

// Provider es donde se encuentran las funciones y el state
const ModalProvider = (props) => {

  // Creamos un state del provider, lo q nos interesa es guardar el id al q el usuario de click
  const [ idreceta, guardarIdReceta ] = useState(null); // no va a ver ninguna seleccionada

  // creamos otro state para guardar la receta que viene de la API en resultado
  const [ receta, guardarReceta ] = useState({});

  // una vez que tenemos la id de la receta gracias a guardarIdReceta queremos hacer
  // una llamada a la API
  useEffect( () => {
    const obtenerReceta = async () => {
      if(!idreceta) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

      const resultado = await axios.get(url);
      // console.log(resultado.data.drinks[0]);
      guardarReceta(resultado.data.drinks[0]);

    }
    obtenerReceta();

  },[idreceta] );




  return (
    <ModalContext.Provider
      value={{
        guardarIdReceta,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;