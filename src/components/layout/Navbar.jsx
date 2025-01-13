import React from "react";
import { AiOutlineApple } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <AiOutlineApple />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
