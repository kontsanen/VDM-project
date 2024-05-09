// import logo from './logo.svg';
import '../App.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import InfoHeadings from '../InfoHeadings';
import InfoBody from '../InfoBody';
import { ScrollBox } from '../components/scrollBox';




function InfoPage() {
    return ( 
        <div>
        <Navbar />
        
        <div className='content'>
            <InfoHeadings />
            <InfoBody />
            <ScrollBox />
        </div>
        <Footer />
    </div>
    );
}
export default InfoPage;