
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from './ScrollToTop';



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
import MainOffer from './components/MainOffer';
import Upcoming from './components/Upcoming';
// import Quotes from './components/Quotes';
import Newsletter from './components/Newsletter';

import PageHeader from './components/about/PageHeader';
import AboutOffer from './components/about/AboutOffer';
import OurServices from './components/about/OurServices';
import Timeline from './components/about/Timeline';
import Footer from './components/Footer';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mainPage: true };

    // this.toggleDisplay = () => this.setState({mainPage: !this.state.mainPage})
  }
  render() {
    return (
      <Router>
        <ScrollToTop />
        <div className="App">
          <Header isTransparent={this.state.mainPage} />
          <Switch>
            <Route path="/details">
              <PageHeader />
              <AboutOffer />
              <OurServices />
              <Timeline />
            </Route>
            <Route path="/">
              <SliderContainer />
              <Promo />
              <MainOffer />
              <Upcoming />
              <Newsletter />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
{/* <div className="container">
<div className="break-line gold op-3"></div></div> */}
{/* <Section3 /> */ }