const productos = [
  { id: '1', nombre: 'Coca Cola', precio: 5000, categoria: 'bebidas', imagen: 'https://via.placeholder.com/150' },
  { id: '2', nombre: 'Taza Javascript', precio: 3000, categoria: 'merchandasing', imagen: 'https://via.placeholder.com/150' },
  { id: '3', nombre: 'Pepsi Max', precio: 4000, categoria: 'bebidas', imagen: 'https://via.placeholder.com/150' },
  { id: '4', nombre: 'Sticker React', precio: 1000, categoria: 'merchandasing', imagen: 'https://via.placeholder.com/150' },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

