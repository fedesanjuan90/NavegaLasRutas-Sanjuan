// ItemDetail.jsx
const ItemDetail = ({ producto }) => (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <button>Agregar al carrito</button>
    </div>
  );
  
  export default ItemDetail;
  