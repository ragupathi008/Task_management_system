import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import Loader from "../components/Loader";

import { getTasks, deleteTask } from "../api/taskApi";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const { data } = await getTasks();
        setTasks(data.tasks);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  const handleTaskCreated = (task) => {
    setTasks((prev) => [task, ...prev]);
  };

  const handleEdit = (task) => {
  setEditingTask(task);
  setShowForm(true);
    };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {
      await deleteTask(id);

      setTasks((prev) =>
        prev.filter((task) => task._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />

      <TaskForm
  show={showForm}
  onClose={() => {
    setShowForm(false);
    setEditingTask(null);
  }}
  task={editingTask}
  onTaskCreated={handleTaskCreated}
/>

      <div className="dashboard">

        <div className="dashboard-header">

          <h2>My Tasks</h2>

          <button
            className="add-task-btn"
            onClick={() => setShowForm(true)}
          >
            + Add Task
          </button>

        </div>

        {loading ? (
          <Loader text="Loading Tasks..." />
        ) : tasks.length === 0 ? (
          <h3>No Tasks Found</h3>
        ) : (
          <div className="task-grid">
            {tasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </div>
        )}

      </div>
    </>
  );
}

export default Dashboard;