import React from 'react';
import useAuth from '../Hooks/useAuth';

const Navbar = () => {

   const { handleLogOut, user } = useAuth();
   const handleSignOut = () => {
      handleLogOut();
   }

   return (
      <div className='bg-background'>
         <div className="navbar p-4 container mx-auto">
            <div className="flex-1">
               <a className="btn btn-ghost text-xl">Do Work</a>
            </div>
            <div className="flex-none">
               <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                     <div className="w-10 rounded-full">
                        <img
                           alt="DP"
                           src={user?.photoURL} />

                     </div>
                  </div>
                  <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                     <li><a>Hello</a></li>
                     <li><button onClick={handleSignOut} className='hover:bg-accent hover:text-white'>Logout</button></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;