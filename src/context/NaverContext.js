import React, { createContext, useState } from "react";

export const ApiContext = createContext();

export const NaverContext = ({ children }) => {
  const [search, setSearch] = useState([]);

  const getSearch = (product) => {
    fetch(`/api/v1/search/shop.json?query=${product}`, {
      headers: {
        "X-Naver-Client-Id": process.env.REACT_APP_X_Naver_Client_Id,
        "X-Naver-Client-Secret": process.env.REACT_APP_X_Naver_Client_Secret,
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSearch(data.items);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ApiContext.Provider value={{ search, setSearch, getSearch }}>
      {children}
    </ApiContext.Provider>
  );
};

export default NaverContext;
