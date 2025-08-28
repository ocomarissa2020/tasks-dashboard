import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import Dashboard from "./components/Dashboard";
import LoadingSpinner from "./components/LoadingSpinner";
import { fetchTasks, createTask, updateTask, deleteTask } from "./api";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadTasks = async () => {
    setLoading(true);
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCreate = async (task) => {
    await createTask(task);
    loadTasks();
  };

  const handleStatusChange = async (id, status) => {
    await updateTask(id, status);
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const handleDragEnd = async (result) => {
    const { destination, draggableId } = result;
    if (!destination) return;

    const taskId = parseInt(draggableId);
    const newStatus = destination.droppableId;
    await updateTask(taskId, newStatus);
    loadTasks();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Tasks Dashboard</h1>
      <button
        style={{
          padding: "12px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#2196F3",
          color: "#fff",
          fontSize: "18px",
          cursor: "pointer",
          width: "250px",
          marginBottom: "24px",
        }}
        onClick={loadTasks}
      >
        Refresh Tasks
      </button>
      <TaskForm onCreate={handleCreate} />

      {loading && <LoadingSpinner />}

      <Dashboard
        tasks={tasks}
        onDragEnd={handleDragEnd}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
}
