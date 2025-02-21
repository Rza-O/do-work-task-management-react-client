import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

const dummyTasks = [
   { id: "1", title: "Task 1", status: "todo" },
   { id: "2", title: "Task 2", status: "todo" },
   { id: "3", title: "Task 3", status: "inProgress" },
   { id: "4", title: "Task 4", status: "done" },
];

const TaskBoard = () => {
   const [tasks, setTasks] = useState(dummyTasks);

   const handleDragEnd = (result) => {
      if (!result.destination) return; 

      const updatedTasks = [...tasks];
      const [movedTask] = updatedTasks.splice(result.source.index, 1);
      updatedTasks.splice(result.destination.index, 0, movedTask);

      setTasks(updatedTasks);
   };

   return (
      <DragDropContext onDragEnd={handleDragEnd}>
         <div className="grid grid-cols-3 gap-4">
            {["todo", "inProgress", "done"].map((status) => (
               <Droppable key={status} droppableId={status}>
                  {(provided) => (
                     <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="p-4 bg-gray-100 rounded-lg min-h-[200px]"
                     >
                        <h2 className="text-lg font-bold">{status.toUpperCase()}</h2>
                        {tasks
                           .filter((task) => task.status === status)
                           .map((task, index) => (
                              <Draggable key={task.id} draggableId={task.id} index={index}>
                                 {(provided) => (
                                    <div
                                       ref={provided.innerRef}
                                       {...provided.draggableProps}
                                       {...provided.dragHandleProps}
                                       className="p-2 mb-2 bg-white rounded-md shadow-md"
                                    >
                                       {task.title}
                                    </div>
                                 )}
                              </Draggable>
                           ))}
                        {provided.placeholder}
                     </div>
                  )}
               </Droppable>
            ))}
         </div>
      </DragDropContext>
   );
};

export default TaskBoard;
