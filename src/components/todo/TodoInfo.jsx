import React from "react";
import "./TodoInfo.css";
import TodoItem from "./TodoItem";

const TodoInfo = ({ data, itemDelete }) => {
  return (
    <div className="TodoInfo">
      <input type="text" />
      {data.map((item) => {
        return <TodoItem key={item.id} item={item} itemDelete={itemDelete} />;
      })}
    </div>
  );
};

export default TodoInfo;
