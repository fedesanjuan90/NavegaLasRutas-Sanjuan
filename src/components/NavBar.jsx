import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#eee' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
        <h1>MiTienda</h1>
      </Link>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', margin: 0, padding: 0 }}>
        <li><Link to="/categoria/bebidas">Bebidas</Link></li>
        <li><Link to="/categoria/merchandasing">Merchandasing</Link></li>

      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

