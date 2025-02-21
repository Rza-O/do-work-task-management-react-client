import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import AddTaskModal from "./AddTaskModal";
import useAuth from "../Hooks/useAuth";

const Welcome = () => {
   const { user } = useAuth();
   const [isModalOpen, setIsModalOpen] = useState(false);

   return (
      <div className="bg-[url('/ContourLine.svg')] h-[300px] bg-cover bg-no-repeat flex flex-col justify-center items-center">
         <h1 className="text-5xl font-bold text-primary">
            {`Welcome, ${user?.displayName}!`}
         </h1>
         <p className="text-2xl font-bold text-text">
            Productivity awaits at your priority!
         </p>
         <button
            className="btn bg-accent text-white mt-4 flex items-center gap-2"
            onClick={() => setIsModalOpen(true)}
         >
            <IoMdAdd size={24} />
            Add Task
         </button>

         {isModalOpen && <AddTaskModal onClose={() => setIsModalOpen(false)} />}
      </div>
   );
};

export default Welcome;
