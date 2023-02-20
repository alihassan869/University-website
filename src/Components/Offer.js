import React from 'react';
import './Offer.css';
function Offer() {
  return (
    <>
      <div className="container-fluid px-0 offer py-5">
        <div className="text-title text-center py-3">
          <div className="text">
            <h2>Course We offer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ex.
            </p>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-md-3 col-10 mx-auto mb-3 mb-md-0 text-center offer-card">
              <b>intermediate</b>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                sed, dolorem quod earum tempora, eius necessitatibus vitae ex
                rerum vel assumenda aperiam quas.
              </p>
            </div>
            <div className="col-md-3 col-10 mx-auto mb-3 mb-md-0 text-center offer-card">
              <b>Degree</b>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                sed, dolorem quod earum tempora, eius necessitatibus vitae ex
                rerum vel assumenda aperiam quas.
              </p>
            </div>
            <div className="col-md-3 col-10 mx-auto mb-3 mb-md-0 text-center offer-card">
              <b>Post graduation</b>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                sed, dolorem quod earum tempora, eius necessitatibus vitae ex
                rerum vel assumenda aperiam quas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
