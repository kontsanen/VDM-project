// import logo from './logo.svg';
import '../App.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import InfoHeadings from '../InfoHeadings';
import InfoBody from '../InfoBody';


function InfoPage() {
    return ( 
        <div>
        <Navbar />
        <div className='content'>
            <InfoHeadings />
            <InfoBody />
        </div>
        <Footer />
    </div>
    );
}
export default InfoPage;