import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";

export default function Dashboard({
  tasks,
  onDragEnd,
  onDelete,
  onStatusChange,
}) {
  const columns = [
    { id: "todo", label: "TODO", color: "#ffebee" },
    { id: "in-progress", label: "IN-PROGRESS", color: "#fff3e0" },
    { id: "done", label: "DONE", color: "#e8f5e9" },
  ];

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        style={{
          display: "flex",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        {columns.map((col) => (
          <Droppable droppableId={col.id} key={col.id}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  flex: "1 1 300px",
                  minHeight: "300px",
                  border: `2px solid ${col.color}`,
                  borderRadius: "8px",
                  padding: "12px",
                  backgroundColor: col.color,
                  boxSizing: "border-box",
                }}
              >
                <h2 style={{ textAlign: "center", marginBottom: "24px" }}>
                  {col.label}
                </h2>
                {tasks
                  .filter((t) => t.status === col.id)
                  .map((task, index) => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      index={index}
                      onDelete={onDelete}
                      onStatusChange={onStatusChange}
                    />
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}
