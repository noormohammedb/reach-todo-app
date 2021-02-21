import React from "react";
import { Link } from "react-router-dom";
import "./router.css";

function Header() {
   return (
      <>
         <header>
            <Link to="/">ToDo</Link>
            <Link to="/about">about</Link>
         </header>
      </>
   );
}

export default Header;
