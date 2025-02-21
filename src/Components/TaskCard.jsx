const TaskCard = ({ task }) => {
   return (
      <div className={`p-2 mb-2 bg-white rounded-md shadow-md ${new Date(task.dueDate) < new Date() ? "text-red-500" : ""}`}>
         {task.title} - Due: {new Date(task.dueDate).toLocaleDateString()}
      </div>
   );
};

export default TaskCard;
