import React from 'react';
import Navbar from '../Components/Navbar';
import Welcome from '../Components/Welcome';
import useAuth from '../Hooks/useAuth';
import KanbanBoard from '../Components/KanbanBoard';
import { useTasks } from '../Hooks/useTasks';

const Home = () => {
   const { handleLogOut } = useAuth();
   const { tasks } = useTasks();
   console.log(tasks)
   const handleSignOut = () => {
      handleLogOut();
   }
   return (
      <div className=''>
         <Navbar />
         <section className=''>
            <Welcome />
         </section>
         <section>
            {
               tasks.length > 0 ? <KanbanBoard /> : <div className='min-h-[300px] content-center text-center'>
                  <h2 className='text-5xl font-bold text-primary'>No tasks available!</h2>
               </div>
            }
         </section>
      </div>
   );
};

export default Home;