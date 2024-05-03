import "./navbar.css";
import "./YleNextVar.woff2";

function Navbar () {
    return (
        <nav className="navbar">
            <p><a className="navlink">Ylelogo</a></p>
            <p>
                <a className="navlink">Mistä on kyse</a>
                <a className="button">Testaa medialukutaitosi!</a>
            </p>
        </nav>
    )
}

export default Navbar