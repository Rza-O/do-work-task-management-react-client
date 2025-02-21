import axios from "axios";

const API = import.meta.env.VITE_server_link;

export const fetchTasks = async () => {
   const { data } = await axios(API);
   return data;
}