import React, { useState } from 'react';
import { LoginBg, Logo } from '../assets';
import { LoginInput } from '../components';
import { FaCheck, FaEnvelope, FaLock, FcGoogle } from '../assets/icons';
import { motion } from 'framer-motion';
import { buttonClick } from '../animations';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <div className='w-screen h-screen relative overflow-hidden flex'>
      {/* background image */}
      <img
        className='w-full h-full object-cover absolute'
        src={LoginBg}
        alt='Login background'
      />
      {/* content box */}

      <div className='flex flex-col items-center gap-6 bg-cardOverlay w-[60%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12'>
        {/* top logo section */}
        <div className='flex items-center justify-start gap-4 w-full'>
          <img src={Logo} className='w-8' alt='' />
          <p className='text-headingColor font-semibold text-2xl'>City</p>
        </div>
        {/* Welcome Text */}
        <p className='text-3xl font-semibold text-headinColor'>Welcome Back</p>
        <p className='text-xl text-textColor -mt-6'>
          {' '}
          {!isSignUp ? 'SignIn' : 'SignUp'} with Following
        </p>

        {/* input section */}
        <div className='w-full flex flex-col items-center gap-6 px-4 md:px-12 py-4'>
          <LoginInput
            placeholder='Email Here'
            icon={<FaEnvelope className='text-xl text-textColor' />}
            inputState={userEmail}
            inputStateFunction={setUserEmail}
            type='email'
            isSignUp={isSignUp}
          />

          <LoginInput
            placeholder='Password Here'
            icon={<FaLock className='text-xl text-textColor' />}
            inputState={password}
            inputStateFunction={setPassword}
            type='password'
            isSignUp={isSignUp}
          />

          {isSignUp && (
            <LoginInput
              placeholder='Confirm Password Here'
              icon={<FaCheck className='text-xl text-textColor' />}
              inputState={confirmPassword}
              inputStateFunction={setConfirmPassword}
              type='password'
              isSignUp={isSignUp}
            />
          )}

          {!isSignUp ? (
            <p>
              Doesnt have an account :{' '}
              <motion.button
                className='text-red-950 cursor-pointer bg-transparent'
                onClick={() => setIsSignUp(true)}
                {...buttonClick}
              >
                Create One
              </motion.button>{' '}
            </p>
          ) : (
            <p>
              Have an account :
              <motion.button
                className='text-red-800 cursor-pointer bg-transparent'
                {...buttonClick}
                onClick={() => setIsSignUp(false)}
              >
                Sign-In here
              </motion.button>{' '}
            </p>
          )}

          {/* button section */}

          <motion.button
            {...buttonClick}
            className='w-full px-4 py-2 rounded-md bg-red-400 text-white text-xl capitalize hover:bg-red-700 transition-all duration-200'
          >
            {isSignUp ? 'Sign-Up' : 'Sign-In'}
          </motion.button>
        </div>

        <div className='flex items-center justify-between gap-16'>
          <div className='w-24 h-[1px] rounded-md bg-white'></div>
          <p className='text-white'>or</p>
          <div className='w-24 h-[1px] rounded-md bg-white'></div>
        </div>

        <motion.div
          {...buttonClick}
          className='flex items-center justify-center px-20 py-2 bg-cardOverlay backdrop-blur-md cursor-pointer rounded-3xl gap-4'
        >
          <FcGoogle className='text-3xl' />
          <p className='capitalize text-base text-textColor'>
            SignIn with Google
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
