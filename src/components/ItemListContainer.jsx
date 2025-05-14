import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="text-center bg-white p-5 shadow rounded w-100">
      <h1 className="display-4 mb-4">{greeting}</h1>
      <p className="lead">¡Explorá nuestras ofertas exclusivas y encontrá lo que buscás!</p>
      <button className="btn btn-primary mt-3">Ver productos</button>
    </div>
  );
};

export default ItemListContainer;


