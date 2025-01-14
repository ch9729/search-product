import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ search }) => {
  return (
    <div className="card compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body\">
        <a href={search.link}>
          <div>
            <div className="avatar">
              <div className="rounded-full shadow w-14 h-14">
                <img src={search.image} />
              </div>
            </div>
          </div>
          <div>
            <h2
              className="card-title"
              dangerouslySetInnerHTML={{ __html: search.title }}
            ></h2>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductItem;
