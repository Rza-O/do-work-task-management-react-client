import React from 'react';
import useAuth from '../Hooks/useAuth';

const Login = () => {
   const { handleGoogleLogin } = useAuth();

   const handleLogin = () => {
      handleGoogleLogin()
   }

   return (
      <div>
         <h1 className='text-2xl'>this is login page</h1>
         <button onClick={handleLogin}>Google sign in</button>
      </div>
   );
};

export default Login;