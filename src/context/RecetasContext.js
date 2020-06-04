import React, { createContext, useState, useEffect } from "react";
import axios from "axios";


// Crear el Context
export const RecetasContext = createContext();

// Crear el Provider es donde se encuentran las funciones y el state
const RecetasProvider = (props) => {

  // vamos a tener 2 states:
  // uno para la busqueda
  const [busqueda, buscarRecetas ] = useState({
    nombre: '',
    categoria: ''
  })

  // otro para las recetas, que este sera el resultado de la busqueda
  const [recetas, guardarRecetas ] = useState([]);

  // agregamos otro state para confirmar que se ejecuta la consulta cuando le damos a submit
  const [ consultar, guardarConsultar ] = useState(false);

  // Agregamos el useEffect para ejecutar al API pq aqui ya obtenemos el nombre del ingrediente y la categoria
  // podemos buscar en la API

  // aplicamos destructuring para coger los valores q pasamos como parametros a la url:
  const { nombre, categoria } = busqueda;

  useEffect(() => {
    if (consultar) {
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c${categoria}`;

        // console.log(url);

        const resultado = await axios.get(url);

        // console.log("resultado ", resultado.data.drinks); //de aqui vemos que es un objeto aqccedemos: data.drinks
        guardarRecetas(resultado.data.drinks); // guardamos la busqueda en el state
      }
      obtenerRecetas();
    }
  },[busqueda]);
  // le pasamos como dependencia la busqueda, pq queremos que se ejecute cada vez q la busqueda cambia



  return (
    <RecetasContext.Provider
    value={{
      recetas,
      buscarRecetas,
      guardarConsultar
    }}>
      {props.children}
    </RecetasContext.Provider>
  );
}

export default RecetasProvider;