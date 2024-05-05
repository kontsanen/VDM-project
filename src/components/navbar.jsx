import "./navbar.css";
import '../fonts.css';
import React, { useState, useEffect } from 'react';

function Navbar () {
    const [isOpaque, setIsOpaque] = useState(false);
    const [isShortened, setIsShortened] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup function to remove event listener when component unmounts
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const handleScroll = () => {
      setIsOpaque(window.scrollY > 90);
      setIsShortened(window.scrollY > 300);
    };

    return (
        <div className={`navbarcontainer ${isOpaque ? 'opaqueNavbar' : ''} ${isShortened ? 'shortenedNavbar' : ''}`}>
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