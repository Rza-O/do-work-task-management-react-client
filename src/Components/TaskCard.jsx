import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaEdit, FaTrash } from "react-icons/fa"; // Importing the icons for Edit and Delete
import axios from "axios";
import { useTasks } from "../Hooks/useTasks";

const TaskCard = ({ task }) => {
   const { refetchTasks } = useTasks()
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [updatedTask, setUpdatedTask] = useState({ ...task });

   // Handle Modal Open and Close
   const openModal = () => setIsModalOpen(true);
   const closeModal = () => setIsModalOpen(false);

   // Handle Update Task
   const handleUpdate = async () => {
      try {
         await axios.put(`${import.meta.env.VITE_server_link}/tasks/${task._id}`, updatedTask);
         closeModal();
         refetchTasks();
      } catch (error) {
         console.error("Error updating task:", error);
      }
   };

   // Handle Delete Task
   const handleDelete = async () => {
      try {
         const result = await Swal.fire({
            title: 'Are you sure?',
            text: "This task will be permanently deleted!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
         });

         if (result.isConfirmed) {
            await axios.delete(`${import.meta.env.VITE_server_link}/tasks/${task._id}`);
            Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
            refetchTasks();
         }
      } catch (error) {
         console.error("Error deleting task:", error);
         Swal.fire('Error', 'There was a problem deleting the task.', 'error');
      }
   };

   return (
      <div className="bg-[#e7f3e8] p-3 shadow rounded mb-2 flex justify-between items-center">
         <div>
            <h3 className="font-bold">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>
         </div>

         <div className="flex justify-between items-center mt-3">
            {/* Edit and Delete Icons */}
            <div className="flex space-x-2">
               <FaEdit
                  onClick={openModal}
                  className="text-primary cursor-pointer"
                  size={15}
               />
               <FaTrash
                  onClick={handleDelete}
                  className="text-error cursor-pointer"
                  size={15}
               />
            </div>
         </div>

         {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
               <div className="bg-white p-6 rounded-lg w-96">
                  <h2 className="text-xl font-bold mb-4">Edit Task</h2>
                  <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                     <div>
                        <label className="block text-sm text-gray-600 mb-2">Title</label>
                        <input
                           type="text"
                           value={updatedTask.title}
                           onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
                           className="input input-bordered w-full"
                           placeholder="Task Title"
                           required
                        />
                     </div>

                     <div>
                        <label className="block text-sm text-gray-600 mb-2">Description</label>
                        <textarea
                           value={updatedTask.description}
                           onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
                           className="textarea textarea-bordered w-full"
                           placeholder="Task Description"
                           rows="3"
                        />
                     </div>

                     <div className="flex justify-end gap-2 mt-4">
                        <button type="button" className="btn" onClick={closeModal}>
                           Cancel
                        </button>
                        <button type="button" className="btn bg-accent text-white" onClick={handleUpdate}>
                           Save Changes
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         )}



      </div>
   );
};

export default TaskCard;
