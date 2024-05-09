// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/homePage';
import InfoPage from './pages/infoPage';
import TestPage from './pages/testPage';



function App() {
  return (
    
    <div className="App">

      <Routes> 
        <Route path="/" element={<HomePage />}/>
        <Route path="/info" element={<InfoPage />}/>
        <Route path="/test" element={<TestPage />}/>
      </Routes>


    </div>
  );
}

export default App;
