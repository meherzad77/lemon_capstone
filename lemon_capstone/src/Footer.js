import logo from './assets/Logo.svg'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} width="300px"/>      
            <nav className="nav_footer">
                <ul className="nav-list-footer">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/specials">MENU</Link></li>
                <li><Link to="/booking">RESERVATIONS</Link></li>
                <li><Link to="/order">ORDER ONLINE</Link></li>
                <li><Link to="/login">LOGIN</Link></li>
                </ul>
            </nav>

            <p className="footer_text">
                <strong>Contact:</strong>
                <br />
                (415) 123-4567
                <br />
                123, Lemon Street, Lemon City, LM 12345
                <br />
                abc@def.com
                <br />

            </p>

            <section>
            <ul className="socials">
                <li><strong>Socials:</strong></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>

            </ul>
            </section>
            <br/>

        </footer>

    )

}

export default Footer;