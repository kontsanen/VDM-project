// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <div className="header">

          <div className='logoelement'>
            <img src='/resources/images/yle-logo-valkoinen-crop.png' alt="Yle" height="70px" />
            <h1>Omassa kuplassa</h1>
          </div>

          

      </div>
      <div className="content">
        {/*  kaikki sivun kontentti tulee tähän contentin sisään */}
        <div className='infosection'>
          <h2>Oletko koskaan miettinyt, kuinka vahva medialukutaito juuri sinulla on?</h2>
          <div>
          <a className="bigbutton" href="testi">Testaa nyt!</a>
          </div>
        </div>

        <div>tähän väliin tulee video</div>

        <div className='infosection'>
          <h2>Mutta miten tämä kaikki toimii liibalaaba?</h2>
          <div>
          <a className="bigbutton" href="testi">Lue lisää</a>
          </div>
          <div>
           <h4>Tai tsekkaa medialukutaitosi viimeisimpien tapahtumien kanssa!</h4>
            <h4>v</h4>
          </div>
        </div>

        <div>tähän tulee some-gridi</div>

        <div>jou</div>
        <div>kontsaa tähän</div>
        <div>jotain</div>
        <div>sisältöä</div>
        <div>turhaaa</div>
        <div>settiä</div>
        <div>paskan</div>
        <div>jauhantaa</div>
        <div>jou</div>
        <div>kontsaa tähän</div>
        <div>jotain</div>
        <div>sisältöä</div>
        <div>turhaaa</div>
        <div>settiä</div>
        <div>paskan</div>
        <div>jauhantaa</div>
        <div>jou</div>
        <div>kontsaa tähän</div>
        <div>jotain</div>
        <div>sisältöä</div>
        <div>turhaaa</div>
        <div>settiä</div>
        <div>paskan</div>
        <div>jauhantaa</div>
        <div>jou</div>
        <div>kontsaa tähän</div>
        <div>jotain</div>
        <div>sisältöä</div>
        <div>turhaaa</div>
        <div>settiä</div>
        <div>paskan</div>
        <div>jauhantaa</div>
        <div>jou</div>
        <div>kontsaa tähän</div>
        <div>jotain</div>
        <div>sisältöä</div>
        <div>turhaaa</div>
        <div>settiä</div>
        <div>paskan</div>
        <div>jauhantaa</div>
        <div>jou</div>
        <div>kontsaa tähän</div>
        <div>jotain</div>
        <div>sisältöä</div>
        <div>turhaaa</div>
        <div>settiä</div>
        <div>paskan</div>
        <div>jauhantaa</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
