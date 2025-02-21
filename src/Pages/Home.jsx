import React from 'react';
import Navbar from '../Components/Navbar';
import Welcome from '../Components/Welcome';
import useAuth from '../Hooks/useAuth';
import TaskBoard from '../Components/TaskBoard';

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
         <section className='container mx-auto'>
            <TaskBoard />
         </section>
      </div>
   );
};

export default Home;