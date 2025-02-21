import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useTasks } from "../Hooks/useTasks";
import useAuth from "../Hooks/useAuth";


const AddTaskModal = ({ onClose }) => {
   const { user } = useAuth();
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const { refetchTasks } = useTasks();
   const userEmail = user?.email

   const onSubmit = async (data) => {
      const task = {
         ...data,
         userEmail,
         category: "To-Do",
         createdAt: new Date(),
      };

      await axios.post(`${import.meta.env.VITE_server_link}/tasks`, task);
      refetchTasks();
      reset();
      onClose();
   };

   return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
         <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add New Task</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
               <input
                  {...register("title", {
                     required: 'Please enter a task title.', maxLength: {
                        message: "Task title must be 50 characters or less.",
                        value:50}
                  })}
                  className="input input-bordered w-full"
                  placeholder="Task Title"
                  required
               />
               {errors?.title && <p className='text-red-600 text-xs'>{errors.title.message}</p>}
               <textarea
                  {...register("description", {
                     maxLength: {
                        value: 200,
                        message: "Description must be 200 characters or less."
                     },
                  })}
                  className="textarea textarea-bordered w-full"
                  placeholder="Task Description"
               ></textarea>
               {errors?.description && <p className='text-red-600 text-xs'>{errors.description.message}</p>}
               <div className="flex justify-end gap-2">
                  <button type="button" className="btn" onClick={onClose}>
                     Cancel
                  </button>
                  <button type="submit" className="btn bg-accent text-white">
                     Add Task
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default AddTaskModal;
