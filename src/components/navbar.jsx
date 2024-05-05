import "./navbar.css";
import '../fonts.css';

function Navbar () {
    return (
        <div className="navbarcontainer">
        <nav className="navbar">
            <p><a className="navImage" href="koti"><img src="/resources/images/yle-logo-valkoinen-crop.png" alt="Yle" width="38px" /></a></p>

            <p>
                <a className="navlink" href="info">Mistä on kyse?</a>
                <a className="button" href="testi">Testaa medialukutaitosi!</a>
            </p>
        </nav>
        </div>
    )
}

export default Navbar