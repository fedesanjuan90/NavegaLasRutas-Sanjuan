import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos } from "../data/productos";

import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((res) => {
      if (categoriaId) {
        setProductos(res.filter(prod => prod.categoria === categoriaId));
      } else {
        setProductos(res);
      }
    });
  }, [categoriaId]);

  return (
    <div className="text-center bg-white p-5 shadow rounded w-100">
      {greeting && <h1 className="display-4 mb-4">{greeting}</h1>}
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;


