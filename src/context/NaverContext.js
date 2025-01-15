import React, { createContext, useState } from "react";

export const ApiContext = createContext();

export const NaverContext = ({ children }) => {
  const [searchs, setSearchs] = useState([]);

  const API_BASE_URL =
    process.env.NODE_ENV === "production"
      ? "/.netlify/functions/naverApiProxy"
      : "/api";

  const getSearch = (product) => {
    fetch(`${API_BASE_URL}?query=${product}`, {
      // headers: {
      //   "X-Naver-Client-Id": process.env.REACT_APP_X_Naver_Client_Id,
      //   "X-Naver-Client-Secret": process.env.REACT_APP_X_Naver_Client_Secret,
      //   Accept: "application/json",
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        setSearchs(data.items);
      })
      .catch((err) => console.log(err));
  };

  const clearProduct = () => {
    setSearchs([]);
  };

  return (
    <ApiContext.Provider
      value={{ searchs, setSearchs, getSearch, clearProduct }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default NaverContext;
