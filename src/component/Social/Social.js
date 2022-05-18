import React from 'react';
import Loading from '../Shared/Loading';
import google from '../../image/google.png'
import github from '../../image/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Social = () => {
    const navigate = useNavigate();

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    let errorElement;

    if (googleLoading || githubLoading) {
        return <Loading></Loading>
    }

    if (googleError || githubError) {
        errorElement = <p className='text-danger'>Error: {googleError?.message} {githubError?.message} </p> 
      }

    if (googleUser || githubUser) {
        navigate ('/home'); 
    }

    return (
        <div className='container'>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-secondary w-50'></div>
                <p className='or-title mt-2 px-3'>or</p>
                <div style={{height: '1px'}} className='bg-secondary w-50'></div>
            </div>

            {errorElement}

            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-secondary d-block mx-auto w-50 my-3'>
                    <img style={{width: "30px"}} src={google} alt="" />
                    <span className='px-3'>Google Sign In</span>
                </button>

                <button onClick={() => signInWithGithub()} className='btn btn-secondary d-block mx-auto w-50'>
                    <img style={{width: "30px"}} src={github} alt="" />
                    <span className='px-3'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default Social;