import React from 'react';
import Header from '../Header';
import './Home.css';
import Offer from '../Offer';
import Campus from '../Campus';
import Facilities from '../Facilities';
import Says from '../Says';
import Contact from '../Contact';
import Footer from '../Footer';
function Home() {
  return (
    <>
      <Header />
      <Offer />
      <Campus />
      <Facilities />
      <Says />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
