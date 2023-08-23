import React, { useEffect } from 'react';

import Header from './components/header';
import Info from './components/info';
import Vizitka from './components/vizitka';
import Company from './components/company';
import Price from './components/price';
import Score from './components/score';
import Reviews from './components/reviews';
import Map from './components/map';
import Avantages from './components/avantages';
import TrustPilot from './components/trustPilot';
import Footer from './components/footer';
import Cursor from './components/cursor';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Значение в миллисекундах
    });
  }, []);

  return (
    <div className="App">
      <Cursor />
      <Header />
      <Info />
      <Vizitka />
      <Company />
      <Price />
      <Score />
      <Reviews />
      <TrustPilot />
      <Avantages />
      <Map />
      <Footer />
    </div>
  );
}

export default App;

