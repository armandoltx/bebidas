import React, { useContext } from 'react';
import Receta from './Receta';
import { RecetasContext } from '../context/RecetasContext';


const ListaRecetas = () => {

  // para poder consumir los datos que fluyen desde el context (RecetasContext)
  // hay q usar el hook useContext.
  // useContext toma un context, en este caso RecetasContext, lo importamos y lo usamos.
  // ya tenemos disponible todo lo q este en el objeto value del provider
  const { recetas } = useContext(RecetasContext);
  // console.log(recetas);

  return (
    <div className="row mt-5">
      {recetas.map(receta => (
        <Receta
          key={receta.idDrink}
          receta={receta}
        />
      ))}
    </div>
  );
};

export default ListaRecetas;