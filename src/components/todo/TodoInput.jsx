import { useState } from "react";
import "./TodoInput.css";

const TodoInput = ({ changeData }) => {
  const [input, setInput] = useState("");

  const changeText = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input === "") {
      alert("내용을 입력해주세요.");
      return;
    }
    changeData(input);
    setInput("");
  };

  const keyDown = (e) => {
    if (e.keyCode == 13) {
      handleSubmit();
    }
  };

  return (
    <div className="TodoInput">
      <input
        value={input}
        onChange={changeText}
        onKeyDown={keyDown}
        placeholder="사야할 물품"
        type="text"
      />
      <button onClick={handleSubmit}>추가</button>
    </div>
  );
};

export default TodoInput;
