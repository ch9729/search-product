import React from "react";
import "./TodoItem.css";

const TodoItem = ({ item, itemDelete, onUpdate }) => {
  const handleDelete = () => {
    itemDelete(item.id);
  };

  const handleUpdate = () => {
    onUpdate(item.id);
  };
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={item.isDone} onChange={handleUpdate} />
      <div className="text">{item.text}</div>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default TodoItem;
