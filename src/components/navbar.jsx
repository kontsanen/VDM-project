import "./navbar.css";
import '../fonts.css';
import React, { useState, useEffect } from 'react';

function Navbar () {
    const [isOpaque, setIsOpaque] = useState(false);
    const [isShortened, setIsShortened] = useState(false);
    const windowHeight = window.innerHeight;

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
  
      // Cleanup function to remove event listener when component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      }
    }, []);
  
    const handleScroll = () => {
      setIsOpaque(window.scrollY > windowHeight / 4);
      setIsShortened(window.scrollY > windowHeight * 0.70);
    };

    const handleResize = () => {
        windowHeight = window.innerHeight; // Update windowHeight on resize
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