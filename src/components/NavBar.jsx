import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <Link to="/"><h1>MiTienda</h1></Link>
      <ul>
        <li><Link to="/categoria/ropa">Ropa</Link></li>
        <li><Link to="/categoria/tecnologia">Tecnología</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

