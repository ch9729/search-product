import React, { useState } from "react";

const ProductSearch = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    if (search.trim() === "") {
      alert("내용을 입력해주세요.");
      return;
    }
    setSearch("");
  };

  return (
    <div>
      <input
        value={search}
        onChange={handleChange}
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
