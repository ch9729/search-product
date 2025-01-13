import React, { useContext } from "react";

import ProductItem from "./ProductItem";
import { ApiContext } from "../../context/NaverContext";

const ProductResult = () => {
  const { searchs } = useContext(ApiContext);
  return (
    <div>
      {searchs.map((search) => (
        <ProductItem key={search.productId} search={search} />
      ))}
    </div>
  );
};

export default ProductResult;
