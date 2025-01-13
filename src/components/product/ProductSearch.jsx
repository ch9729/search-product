import React, { useContext, useState } from "react";
import { ApiContext } from "../../context/NaverContext";

const ProductSearch = () => {
  const [search, setSearch] = useState("");

  const { getSearch } = useContext(ApiContext);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    if (search === "") {
      alert("내용을 입력해주세요.");
      return;
    }
    getSearch(search);
    setSearch("");
  };

  const keyDown = (e) => {
    if (e.keyCode == 13) {
      handleSubmit();
    }
  };

  return (
    <div>
      <input
        value={search}
        onChange={handleChange}
        onKeyDown={keyDown}
        className="input input-bordered join-item"
        placeholder="제품을 입력하세요"
      />
      <button onClick={handleSubmit} className="btn join-item rounded-r-full">
        검색
      </button>
    </div>
  );
};

export default ProductSearch;
