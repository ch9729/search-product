import React from "react";
import "./TodoItem.css";

const TodoItem = ({ item, itemDelete }) => {
  const handleDelete = () => {
    itemDelete(item.id);
  };
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={item.isDone} />
      <div>{item.text}</div>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default TodoItem;
