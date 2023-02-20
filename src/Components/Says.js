import React from 'react';
import './Says.css';
import client from '../assests/images/user1.jpg';
import client2 from '../assests/images/user2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const FaStar = <FontAwesomeIcon icon={faStar} />;
function Says() {
  return (
    <>
      <div className="container-fluid px-0 Says py-5">
        <div className="text-title text-center py-3">
          <div className="text text-center">
            <h2>What Our Students Says</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ex.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 mx-auto col-10 mb-md-0 mb-3 d-flex justify-content-between client py-3 shadow-lg">
              <div>
                <figure>
                  <img src={client} alt="not found" className=" client-img " />
                </figure>
              </div>
              <div className="ps-3">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis numquam harum, veritatis ea magnam nemo expedita eum
                  autem, debitis, rem animi blanditiis quaerat eligendi
                  perspiciatis nulla illum perferendis provident hic?
                </p>
                <h4>FATIMA BARBER</h4>
                {FaStar}
                {FaStar}
                {FaStar}
                {FaStar}
              </div>
            </div>
            <div className="col-md-5 mx-auto col-10 mb-md-0 mb-3 d-flex justify-content-between client py-3 shadow-lg">
              <div>
                <figure>
                  <img src={client2} alt="not found" className=" client-img " />
                </figure>
              </div>
              <div className="ps-3">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis numquam harum, veritatis ea magnam nemo expedita eum
                  autem, debitis, rem animi blanditiis quaerat eligendi
                  perspiciatis nulla illum perferendis provident hic?
                </p>
                <h4>UMER SHAZED</h4>
                {FaStar}
                {FaStar}
                {FaStar}
                {FaStar}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Says;
