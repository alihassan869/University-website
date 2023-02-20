import React, { useState } from 'react';
import './BlogComponent.css';
import Form from 'react-bootstrap/Form';
import cimg from '../assests/images/certificate.jpg';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Blogcomponent() {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: '',
    lastname: '',
    email: '',
    Phone: '',
    Experiance: '',
    message: '',
  });
  const handledata = (e) => {
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };

  const [image, setimage] = useState('');
  const handledatapic = (e) => {
    setimage(e.target.files[0]);
  };
  const Registercomment = async (e) => {
    e.preventDefault();
    const { name, lastname, email, Phone, Experiance, message } = user;
    if (name && lastname && email && Phone && Experiance && message) {
      axios.post('http://localhost:300/message', user).then((res) => {
        alert(res.data.message);
      });
    } else {
      alert('Please fill fields correctly');
    }
    const formData = new FormData();
    formData.append('image', image);
    const config = {
      headers: {
        'content-type': 'multipart/formdata',
      },
    };
    const url = 'http://localhost:300/upload';
    axios
      .post(url, formData, config)
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log('err :>> ', err);
      });
    navigate('/');
  };
  return (
    <>
      <div className="container-fluid Blog py-5 ">
        <div className="text-title text-center py-3">
          <div className="text">
            <h2>OUR CERTIFICATE & ONLINE Programs For 2021</h2>
          </div>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-7 col-10 mx-auto mb-md-0 mb-3 ">
              <figure>
                <img src={cimg} alt="not found" className="img-fluid" />
              </figure>
              <div className="container">
                <h3>OUR CERTIFICATE & ONLINE Programs For 2021</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, vel quibusdam obcaecati quia voluptas qui praesentium
                  reiciendis sequi veniam tempora quisquam quam, accusantium,
                  natus odit deleniti sed voluptatem nesciunt. Corrupti
                  quisquam, nihil eveniet maxime eius odit. Necessitatibus velit
                  sit nostrum. Esse aliquid, in qui voluptates quisquam
                  veritatis placeat cupiditate sit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, vel quibusdam obcaecati quia voluptas qui praesentium
                  reiciendis sequi veniam tempora quisquam quam, accusantium,
                  natus odit deleniti sed voluptatem nesciunt. Corrupti
                  quisquam, nihil eveniet maxime eius odit. Necessitatibus velit
                  sit nostrum. Esse aliquid, in qui voluptates quisquam
                  veritatis placeat cupiditate sit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, vel quibusdam obcaecati quia voluptas qui praesentium
                  reiciendis sequi veniam tempora quisquam quam, accusantium,
                  natus odit deleniti sed voluptatem nesciunt. Corrupti
                  quisquam, nihil eveniet maxime eius odit. Necessitatibus velit
                  sit nostrum. Esse aliquid, in qui voluptates quisquam
                  veritatis placeat cupiditate sit.
                </p>
                <Form className="form py-4 px-3" onSubmit={Registercomment}>
                  <h4 className="text-center" style={{ color: 'orangered' }}>
                    Apply for job
                  </h4>
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
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      className="input"
                      placeholder="Enter Last name"
                      name="lastname"
                      value={user.lastname}
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
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="number"
                      className="input"
                      placeholder="+92"
                      name="Phone"
                      value={user.Phone}
                      onChange={handledata}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="number"
                      className="input"
                      placeholder="Enter Experiance Here"
                      name="Experiance"
                      value={user.Experiance}
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
                      placeholder="Description"
                      className="input"
                      name="message"
                      value={user.message}
                      onChange={handledata}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="my-3" controlId="formBasicPassword">
                    <h5 style={{ color: 'orangered' }}>
                      UPLOAD YOUR RESUME OR CV
                    </h5>
                    <Form.Control
                      type="file"
                      name="image"
                      className="input"
                      onChange={handledatapic}
                      required
                    />
                  </Form.Group>
                  <button type="submit" className="commentbtn btn">
                    Post Data
                  </button>
                </Form>
              </div>
            </div>
            <div className="col-md-4 col-10 mx-auto mb-md-0 mb-3 ">
              <h5 className="text-center blod px-5 text-white">
                Post Categories
              </h5>
              <Table>
                <tbody>
                  <tr>
                    <td>Business Analytics</td>
                    <td></td>
                    <td></td>
                    <td>21</td>
                  </tr>
                  <tr>
                    <td>DATA SCIENCE</td>
                    <td></td>
                    <td></td>
                    <td>28</td>
                  </tr>
                  <tr>
                    <td>Machine Learning</td>
                    <td></td>
                    <td></td>
                    <td>23</td>
                  </tr>
                  <tr>
                    <td>Computer Science</td>
                    <td></td>
                    <td></td>
                    <td>51</td>
                  </tr>
                  <tr>
                    <td>Commerance</td>
                    <td></td>
                    <td></td>
                    <td>51</td>
                  </tr>
                  <tr>
                    <td>Auto Card</td>
                    <td></td>
                    <td></td>
                    <td>51</td>
                  </tr>
                  <tr>
                    <td>Journalism</td>
                    <td></td>
                    <td></td>
                    <td>12</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogcomponent;
