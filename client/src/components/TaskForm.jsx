import { useState } from "react";
import { createTask } from "../api/taskApi";

function TaskForm({ show, onClose, onTaskCreated }) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "Pending",
    priority: "Medium",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await createTask(form);

      onTaskCreated(data.task);

      setForm({
        title: "",
        description: "",
        status: "Pending",
        priority: "Medium",
      });

      onClose();

    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Failed to create task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className={`overlay ${show ? "show" : ""}`}
        onClick={onClose}
      ></div>

      <div className={`task-popup ${show ? "show" : ""}`}>
        <h3>Add New Task</h3>

        <form className="task-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Task Description"
            value={form.description}
            onChange={handleChange}
          />

          <div className="form-row">
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>

            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Task"}
          </button>

          <button
            type="button"
            className="close-popup"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </>
  );
}

export default TaskForm;