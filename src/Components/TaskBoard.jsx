import { useQuery } from "@tanstack/react-query";

import TaskCard from "./TaskCard";
import { fetchTasks } from "../lib/taskServices";


const TaskBoard = () => {
   const { data: tasks = [] } = useQuery(["tasks"], fetchTasks);

   return (
      <div className="grid grid-cols-3 gap-4">
         {["todo", "inProgress", "done"].map((status) => (
            <div key={status} className="p-4 bg-gray-100 rounded-lg min-h-[200px]">
               <h2 className="text-lg font-bold">{status.toUpperCase()}</h2>
               {tasks
                  .filter((task) => task.status === status)
                  .map((task) => <TaskCard key={task._id} task={task} />)}
            </div>
         ))}
      </div>
   );
};

export default TaskBoard;
