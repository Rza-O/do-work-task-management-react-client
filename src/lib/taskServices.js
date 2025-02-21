import axios from "axios";

const API_URL = import.meta.env.VITE_server_link;

// getting all tasks
export const fetchTasks = async () => {
   const { data } = await axios(API_URL);
   return data;
}

// adding a new task
export const addTask = async (task) => {
   const { data } = await axios.post(API_URL, task);
   return data;
}

// updating a new task
export const updateTask = async (id, updatedTask) => {
   const { data } = await axios.put(`${API_URL}/${id}`, updatedTask);
   return data
}

// deleting a task
export const deleteTask = async (id) => {
   const { data } = await axios.delete(`${API_URL}/${id}`);
   return data;
}

