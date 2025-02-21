import React from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import Column from "./Column";
import axios from "axios";
import { useTasks } from "../Hooks/useTasks";

const KanbanBoard = () => {
   const { tasks, refetchTasks } = useTasks();

   const onDragEnd = async (result) => {
      if (!result.destination) return;

      const { source, destination, draggableId } = result;
      const task = tasks.find((t) => t._id === draggableId);

      if (source.droppableId !== destination.droppableId) {
         await axios.put(`${import.meta.env.VITE_server_link}/tasks/${draggableId}`, {
            ...task,
            category: destination.droppableId,
         });
      }

      refetchTasks(); 
   };

   return (
      <DragDropContext onDragEnd={onDragEnd}>
         <div className="grid grid-cols-3 gap-4 p-6">
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
