import { Draggable } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";

export default function TaskCard({ task, index, onDelete, onStatusChange }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true); // fade-in when mounted
  }, [task.id]);

  const handleDelete = () => {
    setVisible(false); // fade-out
    setTimeout(() => onDelete(task.id), 200); // remove after fade
  };

  const statusColors = {
    todo: "#ffcdd2",
    "in-progress": "#ffe0b2",
    done: "#c8e6c9",
  };

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.2s ease, transform 0.2s ease",
            border: `1px solid ${statusColors[task.status]}`,
            padding: "12px",
            marginBottom: "8px",
            borderRadius: "6px",
            backgroundColor: snapshot.isDragging ? "#bbdefb" : "white",
            boxShadow: snapshot.isDragging
              ? "2px 4px 8px rgba(0,0,0,0.2)"
              : "1px 1px 5px rgba(0,0,0,0.1)",
            ...provided.draggableProps.style,
          }}
        >
          <strong>{task.title}</strong>
          <p style={{ textAlign: "justify" }}>
            {task.description}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button onClick={handleDelete} style={{ color: "red" }}>
              Delete
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
}
