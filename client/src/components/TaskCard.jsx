function TaskCard({ task, onDelete }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "#ef4444";
      case "Medium":
        return "#f59e0b";
      case "Low":
        return "#22c55e";
      default:
        return "#6b7280";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "#16a34a";
      case "In Progress":
        return "#2563eb";
      case "Pending":
        return "#6b7280";
      default:
        return "#6b7280";
    }
  };

  return (
    <div className="task-card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <h3>{task.title}</h3>

        <span
          style={{
            background: getPriorityColor(task.priority),
            color: "#fff",
            padding: "5px 12px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          {task.priority}
        </span>
      </div>

      <p
        style={{
          color: "#555",
          minHeight: "60px",
          lineHeight: "1.5",
        }}
      >
        {task.description || "No description"}
      </p>

      <div
        style={{
          marginTop: "15px",
          marginBottom: "18px",
        }}
      >
        <span
          style={{
            background: getStatusColor(task.status),
            color: "#fff",
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "13px",
          }}
        >
          {task.status}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button
          style={{
            flex: 1,
            background: "#2563eb",
            color: "#fff",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          ✏️ Edit
        </button>

        <button
          onClick={() => onDelete(task._id)}
          style={{
            flex: 1,
            background: "#ef4444",
            color: "#fff",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;