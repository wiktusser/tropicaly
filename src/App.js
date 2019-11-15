
import React from 'react';

import './App.css';
import './css/animate.css';
import './css/aos.css';
import './css/az-styles.css';
import './css/bootstrap.min.css';
import './css/simpleLightbox.min.css';
import './css/slick-theme.css';
import './css/slick.css';
import './css/style.css';

import Header from './components/Header';
import SliderContainer from './components/SliderContainer';
import Promo from './components/Promo';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <SliderContainer />
      <Promo />
      <Section1 />
      <Section2 />
      {/* <div className="container">
        <div className="break-line gold op-3"></div></div> */}
      {/* <Section3 /> */}
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
