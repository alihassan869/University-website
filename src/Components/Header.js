import React from 'react';
import NavBar from './Navbar';
import './Header.css';
function Header() {
  return (
    <>
      <header className="header-card">
        <NavBar />
        <div className="container text-center pt-5 mt-5 banner mb-md-0 mb-5">
          <h1 className="mt-md-5 text-white">WORLD'S BIGGEST UNIVERSITY</h1>
          <p className="py-3">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. IPSUM
            MAGNAM POSSIMUS EUM QUAM UT DEBITIS CORRUPTI PARIATUR ADIPISCI
            BLANDITIIS NIHIL? QUOS ID EST RERUM OPTIO IPSA, INCIDUNT COMMODI
            VOLUPTATE QUAERAT!
          </p>
          <button className="btn text-white ">Visit us to know here</button>
        </div>
      </header>
    </>
  );
}

export default Header;
