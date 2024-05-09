import "./navbar.css";
import '../fonts.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar () {
    const [isOpaque, setIsOpaque] = useState(false);
    const [isShortened, setIsShortened] = useState(false);
    const [borderActive, activateBorder] = useState(false);
    let windowHeight = window.innerHeight;

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      }
    }, );
  
    const handleScroll = () => {
      setIsOpaque(window.scrollY > windowHeight * 0.08);
      activateBorder(window.scrollY > windowHeight * 0.08);
      setIsShortened(window.scrollY > windowHeight * 0.25);
    };

    const handleResize = () => {
        windowHeight = window.innerHeight;
    };

    return (
        <div className={`navbarcontainer ${isOpaque ? 'opaqueNavbar' : ''} ${borderActive ? 'borderBottom' : ''} ${isShortened ? 'shortenedNavbar' : ''}`}>
        <nav className="navbar">
            <p><Link className="navImage" to="/">
                <img src={isOpaque ? "/resources/images/yle-logo-musta-crop.png" : "/resources/images/yle-logo-valkoinen-crop.png"} alt="Yle" width="38px" />
                
                </Link></p>

            <p>
                <Link className="navlink" to="/info">Mistä on kyse?</Link>
                <Link className="button" to="/test">Testaa medialukutaitosi!</Link>
            </p>
        </nav>
        </div>
    )
}

export default Navbar