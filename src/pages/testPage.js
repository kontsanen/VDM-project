import Navbar from '../components/navbar';
import Footer from '../components/footer';

function TestPage() {
    return ( 
        <div>
            <Navbar />
            <div className='content'>
                <h1>Test Page</h1>
                <p>This is an example page</p>
                <h1>Test Page</h1>
                <p>This is an example page</p>
                <h1>Test Page</h1>
                <p>This is an example page</p>
                <h1>Test Page</h1>
                <p>This is an example page</p>
               
                
            </div>
            
            <Footer />
        </div>
    );
}
export default TestPage;