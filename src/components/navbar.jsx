import "./navbar.css";
import '../fonts.css';

function Navbar () {
    return (
        <nav className="navbar">
            <p><a className="navlink" href="koti">Ylelogo</a></p>
            <p>
                <a className="navlink" href="info">Mistä on kyse?</a>
                <a className="button" href="testi">Testaa medialukutaitosi!</a>
            </p>
        </nav>
    )
}

export default Navbar