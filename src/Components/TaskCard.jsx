import React from "react";

const TaskCard = ({ task }) => {
   return (
      <div className="bg-white p-3 shadow rounded mb-2">
         <h3 className="font-bold">{task.title}</h3>
         <p className="text-sm text-gray-600">{task.description}</p>
      </div>
   );
};

export default TaskCard;
