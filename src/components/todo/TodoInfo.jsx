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
      <input type="text" onChange={OnChangeSearch} value={search} />
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
  );
};

export default TodoInfo;
