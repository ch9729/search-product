import React, { useEffect, useRef, useState } from "react";
import TodoInput from "../components/todo/TodoInput";
import TodoInfo from "../components/todo/TodoInfo";
import "../components/todo/Todo.css";

const Todo = () => {
  const [data, setData] = useState([]);
  const dataRef = useRef(0);

  useEffect(() => {
    if (localStorage.getItem("ItemData")) {
      setData(JSON.parse(localStorage.getItem("ItemData")));
    }
    if (JSON.parse(localStorage.getItem("ItemData")).length > 0) {
      dataRef.current = Math.max(
        ...JSON.parse(localStorage.getItem("ItemData")).map((item) => item.id)
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ItemData", JSON.stringify(data));
  }, [data]);

  const changeData = (text) => {
    const newData = {
      id: dataRef.current++,
      isDone: false,
      text: text,
    };
    setData((prev) => [newData, ...prev]);
  };

  const itemDelete = (targetId) => {
    const newDiaryList = data.filter((item) => item.id !== targetId);
    setData(newDiaryList);
  };

  const onUpdate = (targetId) => {
    setData(
      data.map((item) =>
        item.id === targetId ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  return (
    <div className="Todo">
      <TodoInput changeData={changeData} />
      <TodoInfo data={data} itemDelete={itemDelete} onUpdate={onUpdate} />
    </div>
  );
};

export default Todo;
