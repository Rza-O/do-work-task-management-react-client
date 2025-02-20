import React from 'react';
import useAuth from '../Hooks/useAuth';

const Welcome = () => {
   const { user } = useAuth();
   return (
      <div className="bg-[url('/ContourLine.svg')] h-[300px] bg-cover bg-no-repeat content-center">
         <div className="text-center space-y-3">
            <h1 className='text-5xl font-bold text-primary'>{`Welcome, ${user?.displayName}`}!</h1>
            <p className='text-2xl font-bold text-text'>Productivity awaits at your priority!</p>
         </div>
      </div>
   );
};

export default Welcome;