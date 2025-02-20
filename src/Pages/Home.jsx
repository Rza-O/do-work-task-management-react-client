import React from 'react';
import useAuth from '../Hooks/useAuth';
import Navbar from '../Components/Navbar';
import Welcome from '../Components/Welcome';

const Home = () => {
   const { handleLogOut } = useAuth();
   const handleSignOut = () => {
      handleLogOut();
   }
   return (
      <div className=''>
         <Navbar />
         <section className=''>
            <Welcome />
         </section>
      </div>
   );
};

export default Home;