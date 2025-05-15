import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <Link to="/"><h1>MiTienda</h1></Link>
      <ul>
        <li><Link to="/categoria/bebidas">bebidas</Link></li>
        <li><Link to="/categoria/tecnologia">merchandasing</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

