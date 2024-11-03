import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const routes = ["Home", "About", "Signup", "Login"];

  return (
    <div>
      <nav className="bg-gray-800 p-4 flex justify-start gap-5  text-white text-2xl">
        {routes.map((route) => {
          const path = route.toLowerCase();
          return (
            <Link
              key={route}
              to={route === "Home" ? "/" : `/${path}`}
              className="mr-4"
            >
              {route}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
