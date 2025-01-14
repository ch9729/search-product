import React from "react";
import { AiOutlineApple } from "react-icons/ai";
import Todo from "../../pages/Todo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          <AiOutlineApple />
        </Link>
      </div>
      <Link to="/todo">todo</Link>
    </div>
  );
};

export default Navbar;
