import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {

  // creamos un state local que no se podra pasar por los componentes
  // en este caso lo que queremos es acceder a lo que el usuario escribe en el formulario
  const [ busqueda, guardarBusqueda ] = useState({
    nombre: '',
    categoria: ''
  });


  // para poder consumir los datos que fluyen desde el context (CategoeriasContext)
  // hay q usar el hook useContext.
  // useContext toma un context, en este caso CategoriasContext, lo importamos y lo usamos.
  // ya tenemos disponible todo lo q este en el objeto value del provider
  const { categorias } = useContext(CategoriasContext);

  // hacemos lo mismo con RecetasContext
  // entre las llaves se extrae lo requeramos, que esta dentro del objeto value en el provider
  const { buscarRecetas } = useContext(RecetasContext);

  console.log("desde formulario", categorias);

  // leemos los contenidos del formulario usando el state local:
  const obtenerDatosReceta = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })
  }




  return (
    <form
      className="col-12"
      onSubmit={ e => {
        e.preventDefault();
        buscarRecetas(busqueda)
      }}
    >
      <fieldset className="text-center">
        <legend>Busca Bebidas por Categoria o Ingrediente</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Buscar por Ingrediente"
            onChange={obtenerDatosReceta}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-control"
            name="categoria"
            onChange={obtenerDatosReceta}
          >
            <option value="">-- Selecciona Categoria --</option>
            {categorias.map(categoria => (
              <option
                key={categoria.strCategory}
                value={categoria.strCategory}
              >{categoria.strCategory}</option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;