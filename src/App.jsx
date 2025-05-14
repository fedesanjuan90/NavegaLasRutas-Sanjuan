import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <NavBar />
      <main className="container-fluid mt-5">

        <ItemListContainer greeting="¡Hola, bienvenido a la tienda!" />
      </main>
    </>
  );
};

export default App;





