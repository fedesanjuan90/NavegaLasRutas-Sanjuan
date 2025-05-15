const productos = [
  { id: '1', nombre: 'Remera React', precio: 5000, categoria: 'ropa', imagen: 'https://via.placeholder.com/150' },
  { id: '2', nombre: 'Taza Javascript', precio: 3000, categoria: 'accesorios', imagen: 'https://via.placeholder.com/150' },
  { id: '3', nombre: 'Gorra CSS', precio: 4000, categoria: 'ropa', imagen: 'https://via.placeholder.com/150' },
  { id: '4', nombre: 'Sticker HTML', precio: 1000, categoria: 'accesorios', imagen: 'https://via.placeholder.com/150' },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};
