import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";
import { useTasks } from "../Hooks/useTasks";

const Column = ({ category }) => {
   const { tasks } = useTasks();
   const categoryTasks = tasks.filter((task) => task.category === category);

   return (
      <div className="bg-gray-100 p-4 rounded-lg">
         <h2 className="text-xl font-bold mb-2">{category}</h2>
         {categoryTasks.map((task, index) => (
            <Draggable key={task._id} draggableId={task._id} index={index}>
               {(provided) => (
                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                     <TaskCard task={task} />
                  </div>
               )}
            </Draggable>
         ))}
      </div>
   );
};

export default Column;
