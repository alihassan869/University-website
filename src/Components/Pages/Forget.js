import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import './Forget.css';

function Forget() {
  const [user, setuser] = useState({
    email: '',
  });
  const handledata = (e) => {
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };
  const Forgetemail = (e) => {
    e.preventDefault();
    const { email } = user;
    if (email) {
      axios.post('http://localhost:300/Forget', user).then((res) => {
        alert(res.data.message);
      });
    } else {
      alert('please fill the fields correctly');
    }
  };
  return (
    <>
      <div>
        <div className="container-fluid pt-5">
          <div className="container form-con pt-5">
            <Form className="form py-4 px-3" method="POST">
              <h2 style={{ color: 'orangered' }} className="mb-2 text-center">
                Enter Email Here
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
                />
              </Form.Group>
              <button
                type="submit"
                className="commentbtn btn btn-danger w-100"
                onClick={Forgetemail}
              >
                Submit
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forget;
