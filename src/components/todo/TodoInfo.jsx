import React, { useState } from "react";
import "./TodoInfo.css";
import TodoItem from "./TodoItem";

const TodoInfo = ({ data, itemDelete, onUpdate }) => {
  const [search, setSearch] = useState("");

  const OnChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return data;
    }
    return data.filter((item) => item.text.includes(search));
  };

  const filteredItems = getFilteredData();

  return (
    <div className="TodoInfo">
      <h1 className="text-4xl font-medium">사야할 목록☘</h1>

      <input type="text" onChange={OnChangeSearch} value={search} />

      <div className="item_wrapper">
        {filteredItems.map((item) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              itemDelete={itemDelete}
              onUpdate={onUpdate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoInfo;
