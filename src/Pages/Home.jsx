import React from 'react';
import useAuth from '../Hooks/useAuth';

const Home = () => {
   const { handleLogOut } = useAuth();
   const handleSignOut = () => {
      handleLogOut();
   }
   return (
      <div>
         <h1 className='text-2xl'>This is home page</h1>
         <button onClick={handleSignOut}>Logout</button>
      </div>
   );
};

export default Home;