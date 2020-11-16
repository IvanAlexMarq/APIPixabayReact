import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';

function App() {
  //state de la app
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    const consultarAPI = async () => {
      if (busqueda === '') return;
      const imagenesPorPagina = 30;
      const key = '18682550-0c4675b78cad8c2aaee35d10c';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setBusqueda(resultado.hits);
    };
    consultarAPI();

  }, [busqueda]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Formulario
          setBusqueda={setBusqueda}
        />
      </div>
    </div>
  );
}

export default App;
