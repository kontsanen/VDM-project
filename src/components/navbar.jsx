import "./navbar.css";
import '../fonts.css';
import React, { useState, useEffect } from 'react';

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
    }, []);
  
    const handleScroll = () => {
      setIsOpaque(window.scrollY > windowHeight * 0.08);
      activateBorder(window.scrollY > windowHeight * 0.10);
      setIsShortened(window.scrollY > windowHeight * 0.25);
    };

    const handleResize = () => {
        windowHeight = window.innerHeight;
    };

    return (
        <div className={`navbarcontainer ${isOpaque ? 'opaqueNavbar' : ''} ${borderActive ? 'borderBottom' : ''} ${isShortened ? 'shortenedNavbar' : ''}`}>
        <nav className="navbar">
            <p><a className="navImage" href="koti">
                <img src={isOpaque ? "/resources/images/yle-logo-musta-crop.png" : "/resources/images/yle-logo-valkoinen-crop.png"} alt="Yle" width="38px" />
                
                </a></p>

            <p>
                <a className="navlink" href="info">Mistä on kyse?</a>
                <a className="button" href="testi">Testaa medialukutaitosi!</a>
            </p>
        </nav>
        </div>
    )
}

export default Navbar