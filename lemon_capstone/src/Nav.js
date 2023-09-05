import {Link} from 'react-router-dom';

import './Nav.css';
const Nav = () => {
    return (
        <nav className="nav">
        <ul className="nav-list">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/specials">MENU</Link></li>
            <li><Link to="/booking">RESERVATIONS</Link></li>
            <li><Link to="/order">ORDER ONLINE</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
        </ul>
        </nav>
    )
}

export default Nav;