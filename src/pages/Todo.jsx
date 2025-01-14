import React, { useRef, useState } from "react";
import TodoInput from "../components/todo/TodoInput";
import TodoInfo from "../components/todo/TodoInfo";
import "../components/todo/Todo.css";

const Todo = () => {
  const [data, setData] = useState([]);
  const dataRef = useRef(0);

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

  //   const itemIsdone = (targetId) => {
  //     data.filter(())
  //   }

  return (
    <div className="Todo">
      <TodoInput changeData={changeData} />
      <TodoInfo data={data} itemDelete={itemDelete} />
    </div>
  );
};

export default Todo;
