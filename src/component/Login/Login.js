import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from "../../firebase.init";
import { toast, ToastContainer } from 'react-toastify';
import Social from '../Social/Social';
import Loading from '../Shared/Loading';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'

const Login = () => {

    
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate ();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p> 
      }

    const handleFromSubmit = event => {
        event.preventDefault ();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const navigateRegister = event => {
        navigate('/register')
    }

    const resetPassword = async() => {
        const email = emailRef.current.value; 
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent Email');
        }
        else {
            toast ('Enter Your Email Adress');
        }
    }

    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-center user-title mt-5'>Please Login Here</h1>
            <Form onSubmit={handleFromSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="email-title">Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="pass-title">Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
        </Form.Group>
        <Button className="user-button d-block mx-auto my-5 w-50" type="submit">
          Login
        </Button>
      </Form>

      {errorElement}
      <p>New? <Link to='/register' className="common-title pe-auto text-decoration-none" onClick={navigateRegister}>Please Register</Link> </p>
      <p>Forget Password? <button className="btn btn-link common-title text-decoration-none" onClick={resetPassword}>Reset Password</button> </p> 

      <Social></Social> 
      <ToastContainer />
        </div>
    );
};

export default Login;