import React from 'react';
import './Campus.css';
import c1 from '../assests/images/london.png';
import c2 from '../assests/images/newyork.png';
import c3 from '../assests/images/washington.png';
function Campus() {
  return (
    <>
      <div className="container-fluid px-0 Campus py-5">
        <div className="text-title text-center py-3">
          <div className="text text-center">
            <h2>Our Golbal Campus</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ex.
            </p>
          </div>
        </div>
        <div className="container px-md-0 d-flex flex-md-row flex-column justify-content-between">
          <div className=" mb-3 mb-md-0 Campus-card mx-auto">
            <img src={c1} alt="not found" className="img-cards" />
            <div className="layer"></div>
            <h3>London</h3>
          </div>
          <div className=" mb-3 mb-md-0 Campus-card mx-auto">
            <img src={c2} alt="not found" className="img-cards" />
            <div className="layer"></div>
            <h3>New York</h3>
          </div>
          <div className=" mb-3 mb-md-0 Campus-card mx-auto">
            <img src={c3} alt="not found" className="img-cards" />
            <div className="layer"></div>
            <h3>washington</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Campus;
