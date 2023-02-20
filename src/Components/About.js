import React from 'react';
import './About.css';
import abutimg from '../assests/images/about.jpg';
function About() {
  return (
    <>
      <div className="container-fluid About py-5 ">
        <div className="text-title text-center py-3">
          <div className="text">
            <h2>ABOUT US</h2>
          </div>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto mb-md-0 mb-3 pt-5">
              <h2 className="mt-4">We are the world's largest university</h2>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                nulla itaque cumque nostrum non est tempora animi, ducimus quia
                facilis quam, exercitationem, sit dolor accusamus tenetur
                possimus impedit. Fugit, aperiam.
              </p>
              <button className="btn">EXPLORE NOW</button>
            </div>
            <div className="col-md-6 col-10 mx-auto mb-md-0 mb-3">
              <figure>
                <img src={abutimg} alt="not found" className="img-fluid" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
