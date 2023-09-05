import logo from './assets/Logo.svg'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} width="300px"/>      
            <nav className="nav_footer">
                <ul className="nav-list-footer">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">MENU</a></li>
                    <li><a href="#">RESERVATIONS</a></li>
                    <li><a href="#">ORDER ONLINE</a></li>
                    <li><a href="#">LOGIN</a></li>
                </ul>
            </nav>

            <p className="footer_text">
                <strong>Contact:</strong>
                <br />
                <em>Phone</em>
                <br/>
                (415) 123-4567
                <br />
                <em>Address:</em>
                <br />
                123, Lemon Street, Lemon City, LM 12345
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