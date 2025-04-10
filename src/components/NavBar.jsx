import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#eee' }}>
      <h1>Mi Tienda</h1>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default NavBar
