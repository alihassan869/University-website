import './App.css';
import React, { useState } from 'react';
import Home from './Components/Pages/Home';
import Aboutpage from './Components/Pages/Aboutpage';
import Course from './Components/Pages/Course';
import Blog from './Components/Pages/Blog';
import Signin from './Components/Pages/Signin';
import Login from './Components/Pages/Login';
import Forget from './Components/Pages/Forget';
import Resetpassword from './Components/Pages/Resetpassword';
import Notfound from './Components/Pages/Notfound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [user, setuserlogin] = useState({});
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <Home to="/" />
              ) : (
                <Login setuserlogin={setuserlogin} />
              )
            }
          />
          <Route
            path="/about"
            element={
              user && user._id ? (
                <Aboutpage to="/about" />
              ) : (
                <Login setuserlogin={setuserlogin} />
              )
            }
          />
          <Route
            path="/Course"
            element={
              user && user._id ? (
                <Course to="/Course" />
              ) : (
                <Login setuserlogin={setuserlogin} />
              )
            }
          />
          <Route
            path="/Blog"
            element={
              user && user._id ? (
                <Blog to="/Blog" />
              ) : (
                <Login setuserlogin={setuserlogin} />
              )
            }
          />
          <Route path="/SignIn" element={<Signin />} />
          <Route
            exact
            path="/Login"
            element={<Login setuserlogin={setuserlogin} />}
          />
          <Route exact path="/forget" element={<Forget />} />
          <Route exact path="/reset/:token" element={<Resetpassword />} />
          <Route exact path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
