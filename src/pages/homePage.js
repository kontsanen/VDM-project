// import logo from './logo.svg';
import '../App.css';
import LandingNavbar from '../components/landingNavbar';
import Footer from '../components/footer';


import { Link } from 'react-router-dom';



function HomePage() {
    return ( 
        <div>
            <LandingNavbar />
            <div className="header">

                <div className='logoelement'>
                <img src='/resources/images/yle-logo-valkoinen-crop.png' alt="Yle" height="65px" />
                <h1>Omassa kuplassa</h1>
                </div>


                </div>
                <div className="content">
                {/*  kaikki sivun kontentti tulee tähän contentin sisään */}
                <div className='infosection'>
                <h2 className='no-margin'>Oletko koskaan miettinyt, kuinka vahva medialukutaito juuri sinulla on?</h2>
                <div>
                <Link className="bigbutton" to="/test">Testaa nyt!</Link>
                </div>
                </div>

                <div className='videocontainer'>
                <video autoplay controls loop onclick="">
                <source src="https://i.imgur.com/RMIeSpp.mp4" type="video/mp4" />
                Your browser does not support HTML video.
                </video>
                </div>


                <div className='infosection flex-column'>
                <h2 className='no-margin'>Mutta mitä väliä tällä kaikella edes on?</h2>
                <div>
                <Link className="bigbutton" to="info">Ota selvää!</Link>
                </div>
                <div></div>
                <div className='flex-column'>
                <h4 className='narrower no-margin'>Tai freesaa medialukutaitosi viimeisimpien tapahtumien kanssa!</h4>
                <h4 className='no-margin'>v</h4>
                </div>
                </div>

                <div className="grid-container">
                    <div className="grid-item"><img src="https://m.media-amazon.com/images/I/61bueMdnn0L._AC_UF1000,1000_QL80_.jpg" alt="kuva" height="100%" /></div>
                    <div className="grid-item"><img src="https://m.media-amazon.com/images/I/61bueMdnn0L._AC_UF1000,1000_QL80_.jpg" alt="kuva" height="100%" /></div>
                    <div className="grid-item"><img src="https://m.media-amazon.com/images/I/61bueMdnn0L._AC_UF1000,1000_QL80_.jpg" alt="kuva" height="100%" /></div>
                    <div className="grid-item"><img src="https://m.media-amazon.com/images/I/61bueMdnn0L._AC_UF1000,1000_QL80_.jpg" alt="kuva" height="100%" /></div>
                    <div className="grid-item"><img src="https://m.media-amazon.com/images/I/61bueMdnn0L._AC_UF1000,1000_QL80_.jpg" alt="kuva" height="100%" /></div>
                    <div className="grid-item"><img src="https://m.media-amazon.com/images/I/61bueMdnn0L._AC_UF1000,1000_QL80_.jpg" alt="kuva" height="100%" /></div>
                    <div className="grid-item"><img src="https://m.media-amazon.com/images/I/61bueMdnn0L._AC_UF1000,1000_QL80_.jpg" alt="kuva" height="100%" /></div>
                </div>


                </div>
                <Footer />
        </div>
    );
}
export default HomePage;

