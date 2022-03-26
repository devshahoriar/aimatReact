import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Header from './Components/Header/Header';
import FeatWork from './Components/FeatWork/FeatWork';
import Visul from './Components/Visual/Visul';
import imagesloaded from 'imagesloaded';
import Prouducts from './Components/MyProducts/Prouducts';
import Contract from './Components/Contact/Contract';
import Footer from './Components/Footer/Footer';
import preloder from './Components/preloder.gif';
import smoothScrollPolyfillsMin from 'smooth-scroll';

function App() {
  useEffect(()=>{
    smoothScrollPolyfillsMin('a[href*="#"]', {
      speed: 500,
      easing:"easeInOutCubic"
    });
  },[])
  return (
    <>
      <NavBar />
      <Header />
      <FeatWork />
      <Visul />
      <Prouducts />
      <Contract />
      <Footer />
    </>
  );
}

export default App;
