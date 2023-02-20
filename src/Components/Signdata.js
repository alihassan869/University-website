import React, { useState } from 'react';
import './SignData.css';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
const FaAddressBook = <FontAwesomeIcon icon={faAddressBook} />;
const FaPhone = <FontAwesomeIcon icon={faPhone} />;
const FaMessage = <FontAwesomeIcon icon={faMessage} />;
function Signdata() {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    message: '',
  });
  const handledata = (e) => {
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };
  const Register = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmpassword, message } = user;
    if (name && email && password && password === confirmpassword && message) {
      axios.post('http://localhost:300/Register', user).then((res) => {
        alert(res.data.message);
        navigate('/Login');
      });
    }
  };
  return (
    <>
      <div className="container-fluid Sign py-3">
        <div className="text-title text-center py-3">
          <div className="text">
            <h2>CONTACT US & Register Here</h2>
          </div>
        </div>
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-md-5 col-10 mx-auto mb-md-0 mb-3 mt-md-5">
              <div className="row py-5">
                <div className="col-2 text-end ">
                  <i className="icon">{FaAddressBook}</i>
                </div>
                <div className="col-10 mb-3">
                  <h5>XTZ ROAD, ABC BUILDING</h5>
                  <b>LAHORE,NEW CAMPUS</b>
                </div>
                <div className="col-2 text-end">
                  <i className="icon">{FaPhone}</i>
                </div>
                <div className="col-10 mb-3">
                  <h5>+123456789</h5>
                  <b>Monday To saturday,10am to 9pm</b>
                </div>
                <div className="col-2 text-end">
                  <i className="icon">{FaMessage}</i>
                </div>
                <div className="col-10 mb-3">
                  <h5>@786akakl@.gmail.com</h5>
                  <b>Email your Query</b>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-10 mx-auto mb-md-0 mb-3">
              <Form className="form py-4 px-3" onSubmit={Register}>
                <h2 style={{ color: 'orangered' }} className="mb-2 text-center">
                  Register Here
                </h2>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="text"
                    placeholder=" Enter Name Here"
                    className="input"
                    name="name"
                    value={user.name}
                    onChange={handledata}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="email"
                    placeholder=" Enter a email "
                    className="input"
                    name="email"
                    value={user.email}
                    onChange={handledata}
                    required
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="password"
                    placeholder=" Enter a password "
                    className="input"
                    name="password"
                    value={user.password}
                    onChange={handledata}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="password"
                    placeholder=" Enter a Confirm password "
                    className="input"
                    name="confirmpassword"
                    value={user.confirmpassword}
                    onChange={handledata}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Message"
                    className="input"
                    name="message"
                    value={user.message}
                    onChange={handledata}
                    required
                  />
                </Form.Group>
                <button
                  type="submit"
                  className="commentbtn btn"
                  // onClick={Register}
                >
                  Sign Now
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signdata;
