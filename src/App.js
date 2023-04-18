import './App.css';
import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import ContactMe from './components/contact-me/ContactMe';

function App() {
  return ( // JSX -> javascript + XML
    <div>
      <Navbar/>
      <Header/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
