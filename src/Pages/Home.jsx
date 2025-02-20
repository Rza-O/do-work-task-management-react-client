import React from 'react';
import Navbar from '../Components/Navbar';
import Welcome from '../Components/Welcome';
import useAuth from '../Hooks/useAuth';

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