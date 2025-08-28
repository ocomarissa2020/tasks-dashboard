import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/tasks",
});

export const fetchTasks = async () => {
  const res = await API.get("/");
  return res.data;
};

export const createTask = async (task) => {
  const res = await API.post("/", task);
  return res.data;
};

export const updateTask = async (id, status) => {
  const res = await API.patch(`/${id}`, { status });
  return res.data;
};

export const deleteTask = async (id) => {
  const res = await API.delete(`/${id}`);
  return res.data;
};

export default API;
