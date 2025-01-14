import React, { useContext } from "react";

import ProductItem from "./ProductItem";
import { ApiContext } from "../../context/NaverContext";

const ProductResult = () => {
  const { searchs } = useContext(ApiContext);
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
      {searchs.map((search) => (
        <ProductItem key={search.productId} search={search} />
      ))}
    </div>
  );
};

export default ProductResult;
