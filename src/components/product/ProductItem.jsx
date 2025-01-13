import React from "react";

const ProductItem = ({ search }) => {
  return <div dangerouslySetInnerHTML={{ __html: search.title }}></div>;
};

export default ProductItem;
