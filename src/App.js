import React, { Component } from 'react';

import Header from './components/Header';
import Social from './components/Social';
import NavSocial from './components/NavSocial';
import About from './components/About';
import ServicesContainer from './components/ServicesContainer';
import StatisticsContainer from './components/StatisticsContainer';
import Footer from './components/Footer';


import wordpress from './img/wordpress.png';
import facebook from './img/facebook.png';
import twitter from './img/twitter.png';
import youtube from './img/youtube.png';
import instagram from './img/instagram.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <main>
          <NavSocial>
            <Social icon={wordpress} link="https://jessicathings.com" users="1000"/>
            <Social icon={instagram} link="https://www.instagram.com/jhessi_oliv/" users="1200"/>
            <Social icon={facebook} link="https://www.facebook.com/BlogJessicaThings/" users="2800"/>
            <Social icon={youtube} link="https://www.youtube.com/channel/UCcJnXjuCuaK0ZQAdHudc9Yw?view_as=subscriber" users="1200"/>
            <Social icon={twitter} link="https://twitter.com/Jhessi_oliv" users="100"/>
          </NavSocial>
          <About/>
          <section className="General">
            <ServicesContainer/>
            <StatisticsContainer/>
          </section>
          <Footer/>
        </main>
      </div>
    );
  }
}

export default App;


