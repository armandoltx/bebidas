import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Crear el Context
export const ModalContext = createContext();

// Provider es donde se encuentran las funciones y el state
const ModalProvider = (props) => {

  // Creamos un state del provider, lo q nos interesa es guardar el id al q el usuario de click
  const [ idreceta, guardarIdReceta ] = useState(null); // no va a ver ninguna seleccionada




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