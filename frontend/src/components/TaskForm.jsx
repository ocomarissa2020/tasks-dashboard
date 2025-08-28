import { useState } from "react";

export default function TaskForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length < 3) {
      alert("Title must be at least 3 characters");
      return;
    }
    onCreate({ title, description, status: "todo" });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "24px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        marginBottom: "24px",
        gap: "10px",
      }}
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{
          padding: "12px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "16px",
          width: "100%",
          boxSizing: "border-box",
          fontFamily: "Arial, sans-serif",
        }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          padding: "12px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "16px",
          minHeight: "80px",
          resize: "vertical",
          width: "100%",
          boxSizing: "border-box",
          fontFamily: "Arial, sans-serif",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "12px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#4CAF50",
          color: "#fff",
          fontSize: "18px",
          cursor: "pointer",
          width: "100%",
          marginTop: "12px" 
        }}
      >
        Add Task
      </button>
    </form>
  );
}
