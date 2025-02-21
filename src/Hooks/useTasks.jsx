import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

export const useTasks = () => {
   const { user, isLoading } = useAuth();
   const { data: tasks = [], refetch } = useQuery({
      queryKey: ["tasks"],
      queryFn: async () => {
         const res = await axios.get(`${import.meta.env.VITE_server_link}/tasks?userEmail=${user?.email}`);
         return res.data;
      },
      enabled: !isLoading
   });

   return { tasks, refetchTasks: refetch };
};
