import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

import CategoriasProvider, { CategoriasContext } from './context/CategoriasContext';

function App() {
  return (
  // al meter todo dentro de CategoriasProvider, cualquier componente Head, Formulario... tiene acceso al objeto value en CategortiasContext
    <CategoriasProvider>
      <Header />

      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
    </CategoriasProvider>
  );
}

export default App;
