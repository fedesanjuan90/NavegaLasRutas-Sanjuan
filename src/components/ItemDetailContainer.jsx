import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const productosMock = [
  { id: '1', nombre: 'Remera', descripcion: 'Remera 100% algodón' },
  { id: '2', nombre: 'Celular', descripcion: 'Smartphone 128GB' },
  { id: '3', nombre: 'Pantalón', descripcion: 'Pantalón de jean' },
];

const getProductoPorId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productosMock.find(p => p.id === id);
      resolve(producto);
    }, 1000);
  });
};

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductoPorId(itemId).then(setProducto);
  }, [itemId]);

  return (
    <div>
      {producto ? <ItemDetail producto={producto} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
