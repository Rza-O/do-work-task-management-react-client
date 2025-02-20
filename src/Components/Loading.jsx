import React from 'react';
import { PuffLoader } from 'react-spinners';

const Loading = () => {
   return (
      <div className='min-h-screen flex justify-center items-center'>
         <PuffLoader
            color="#359dde"
            loading
            size={100}
            speedMultiplier={1}
         />
      </div>
   );
};

export default Loading;