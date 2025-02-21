import React from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import Column from "./Column";
import axios from "axios";
import { useTasks } from "../Hooks/useTasks";

const KanbanBoard = () => {
   const { tasks, refetchTasks } = useTasks();

   // Function to reorder tasks within a category
   const reorderTasksInCategory = async (tasks, sourceIndex, destIndex, category) => {
      const updatedTasks = [...tasks];
      const taskToMove = updatedTasks[sourceIndex];
      updatedTasks.splice(sourceIndex, 1);
      updatedTasks.splice(destIndex, 0, taskToMove);

      updatedTasks.forEach((task, index) => {
         task.order = index + 1;
      });

      await Promise.all(updatedTasks.map(async (task) => {
         await axios.put(`${import.meta.env.VITE_server_link}/tasks/${task._id}`, task);
      }));
   };

   // Function to move a task to another category
   const moveTaskToAnotherCategory = async (task, sourceCategory, destinationCategory, destinationIndex) => {

      task.category = destinationCategory;

      const existingDestinationTasks = tasks
         .filter(t => t.category === destinationCategory && t._id !== task._id)
         .sort((a, b) => a.order - b.order);

      const updatedDestinationTasks = [
         ...existingDestinationTasks.slice(0, destinationIndex),
         task,
         ...existingDestinationTasks.slice(destinationIndex)
      ];

      updatedDestinationTasks.forEach((t, index) => {
         t.order = index + 1;
      });

      const updatedSourceTasks = tasks
         .filter(t => t.category === sourceCategory && t._id !== task._id)
         .sort((a, b) => a.order - b.order)
         .map((t, index) => {
            t.order = index + 1;
            return t;
         });

      await axios.put(`${import.meta.env.VITE_server_link}/tasks/${task._id}`, task);

      await Promise.all([
         ...updatedDestinationTasks.map(t => axios.put(`${import.meta.env.VITE_server_link}/tasks/${t._id}`, t)),
         ...updatedSourceTasks.map(t => axios.put(`${import.meta.env.VITE_server_link}/tasks/${t._id}`, t)),
      ]);
   };

   const onDragEnd = async (result) => {
      if (!result.destination) return;

      const { source, destination, draggableId } = result;
      const task = tasks.find((t) => t._id === draggableId);

      if (source.droppableId === destination.droppableId) {
         // Dragging within the same category
         const sourceIndex = source.index;
         const destIndex = destination.index;
         await reorderTasksInCategory(tasks, sourceIndex, destIndex, source.droppableId);
      } else {
         // Dragging between different categories
         await moveTaskToAnotherCategory(task, source.droppableId, destination.droppableId, destination.index);
      }

      // Refetch tasks to reflect changes
      refetchTasks();
   };

   return (
      <DragDropContext onDragEnd={onDragEnd}>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {["To-Do", "In Progress", "Done"].map((category) => (
               <Droppable key={category} droppableId={category}>
                  {(provided) => (
                     <div ref={provided.innerRef} {...provided.droppableProps}>
                        <Column category={category} />
                        {provided.placeholder}
                     </div>
                  )}
               </Droppable>
            ))}
         </div>
      </DragDropContext>
   );
};

export default KanbanBoard;
