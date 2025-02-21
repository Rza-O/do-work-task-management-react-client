import React from 'react';
import useAuth from '../Hooks/useAuth';
import loginDP from '../assets/Computer-login-bro.svg'
import { FaGoogle } from "react-icons/fa";

const Login = () => {
   const { handleGoogleLogin } = useAuth();

   const handleLogin = () => {
      handleGoogleLogin()
   }

   return (
      <div className='min-h-screen bg-[url("/ContourLine.svg")] bg-cover bg-no-repeat content-center place-items-center'>
         <div className="card glass bg-secondary/70 w-96 m-8">
            <figure>
               <img
                  className='w-80'
                  src={loginDP}
                  alt="car!" />

            </figure>
            <div className="card-body">
               <div className="mt-8">
                  <button
                     onClick={handleLogin}
                     aria-label="Sign in with Google"
                     className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-3 font-medium duration-200 hover:bg-white/50 focus:ring-2 focus:ring-primary-dark focus:ring-offset-2"
                     type="button"
                  >
                     <FaGoogle className="size-6" />
                     <span>Sign in with Google</span>
                  </button>
                  {/* divider */}
                  {/* <div className="relative py-3">
                     <div className="relative flex justify-center">
                        <span className="before:-translate-y-1/2 after:-translate-y-1/2 px-2 text-neutral-500 text-sm before:absolute before:top-1/2 before:left-0 before:h-px before:w-4/12 after:absolute after:top-1/2 after:right-0 after:h-px after:w-4/12 sm:after:bg-neutral-300 sm:before:bg-neutral-300">
                           Or continue with
                        </span>
                     </div>
                  </div> */}
               </div>
            </div>
         </div>
         {/* <h1 className='text-2xl'>this is login page</h1>
         <button onClick={handleLogin}>Google sign in</button> */}
      </div>
   );
};

export default Login;