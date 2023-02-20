import React, { useState } from 'react';
import './Logincom.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import img from '../assests/images/background.jpg';
function Logincom({ setuserlogin }) {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    email: '',
    password: '',
  });
  const handledata = (e) => {
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };
  const Login = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (email && password) {
      axios.post('http://localhost:300/login', user).then((res) => {
        alert(res.data.message);
        setuserlogin(res.data.user);
        navigate('/');
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
      });
    }
  };
  return (
    <>
      <div className="container-fluid Login py-3">
        <div className="text-title text-center py-3">
          <div className="text">
            <h2>CONTACT US & LOGIN HERE</h2>
          </div>
        </div>
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-6 col-10 mx-auto mb-md-0 mb-3 ">
              <figure>
                <img src={img} alt="not found" className="img-fluid" />
              </figure>
            </div>
            <div className="col-md-6 col-10 mx-auto mb-md-0 mb-3 px-5 py-5">
              <Form className="form py-4 px-3" method="POST" onSubmit={Login}>
                <h2 style={{ color: 'orangered' }} className="mb-2 text-center">
                  LOGIN HERE
                </h2>

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

                <button
                  type="submit"
                  className="commentbtn btn"
                  // onClick={Login}
                >
                  LOGIN NOW
                </button>
                <p className="link-below d-flex flex-column text-end">
                  <Link to="/forget" className="Link  text-decoration-none">
                    forget password?
                  </Link>
                  <Link to="/SignIn" className="Link text-decoration-none">
                    Create New Account
                  </Link>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logincom;
