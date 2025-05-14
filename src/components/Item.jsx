const ProductList = () => {
    const products = [
      { id: 1, name: "Cerveza Artesanal", price: "$1.200", img: "https://via.placeholder.com/150" },
      { id: 2, name: "Vino Malbec", price: "$2.300", img: "https://via.placeholder.com/150" },
      { id: 3, name: "Fernet Branca", price: "$3.000", img: "https://via.placeholder.com/150" }
    ];
  
    return (
      <div className="container my-5">
        <h2 className="text-center mb-4">Nuestros Productos</h2>
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={product.img} className="card-img-top" alt={product.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <button className="btn btn-primary">Agregar al carrito</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductList;
  