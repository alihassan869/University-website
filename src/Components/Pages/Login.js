import React from 'react';
import '../Pages/Login.css';
import Header from '../Header';
import Footer from '../Footer';
import Logincom from '../Logincom';
function Login({ setuserlogin }) {
  return (
    <>
      <Header />
      <Logincom setuserlogin={setuserlogin} />
      <Footer />
    </>
  );
}

export default Login;
