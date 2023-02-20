import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
function Resetpassword() {
  const navigate = useNavigate();
  const { token } = useParams();
  const [user, setuser] = useState({
    password: '',
    confirmpassword: '',
    token: token,
  });

  const handledata = (e) => {
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };
  const SubmitPassword = (e) => {
    e.preventDefault();
    const { password, confirmpassword, token } = user;
    if (password && password === confirmpassword && token) {
      axios.post('http://localhost:300/resetPassword', user).then((res) => {
        alert(res.data.message);
        navigate('/Login');
      });
    } else {
      alert('please fill the fields correctly');
    }
  };
  return (
    <div>
      <div className="container-fluid pt-5">
        <div className="container form-con pt-5">
          <Form className="form py-4 px-3" method="POST">
            <h2 style={{ color: 'orangered' }} className="mb-2 text-center">
              Enter Password Here
            </h2>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="password"
                placeholder=" Enter a password "
                className="input"
                name="password"
                value={user.password}
                onChange={handledata}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="password"
                placeholder=" Enter a Confirm password "
                className="input"
                name="confirmpassword"
                value={user.confirmpassword}
                onChange={handledata}
              />
            </Form.Group>
            <button
              type="submit"
              className="commentbtn btn btn-danger w-100"
              onClick={SubmitPassword}
            >
              Submit
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Resetpassword;
