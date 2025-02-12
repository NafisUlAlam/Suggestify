import { Link, NavLink, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import Theme from "./Theme";
import "../App.css";
const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  //console.log(location);
  //console.log(user?.photoURL);

  //navbar links
  const links = (
    <>
      <button className="btn bg-primary/20 hover:bg-primary text-text border-0">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-secondary" : "")}
        >
          Home
        </NavLink>
      </button>

      <button className="btn bg-primary/20 hover:bg-primary text-text border-0">
        <NavLink
          to="/allqueries"
          className={({ isActive }) => (isActive ? "text-secondary " : "")}
        >
          Queries
        </NavLink>
      </button>

      {loading ? (
        <span className="loading loading-bars loading-lg"></span>
      ) : !user ? (
        <button className="btn bg-primary/20 hover:bg-primary text-text border-0">
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? " " : "")}
          >
            Register
          </NavLink>
        </button>
      ) : (
        <>
          <button className="btn bg-primary/20 hover:bg-primary text-text border-0">
            <NavLink
              to="/recommendationsforme"
              className={({ isActive }) => (isActive ? "" : "")}
            >
              Recommended For Me
            </NavLink>
          </button>
          <button className="btn bg-primary/20 hover:bg-primary text-text border-0">
            <NavLink
              to="/myqueries"
              className={({ isActive }) => (isActive ? "" : "")}
            >
              My Queries
            </NavLink>
          </button>
          <button className="btn bg-primary/20 hover:bg-primary text-text border-0">
            <NavLink
              to="/myrecommendations"
              className={({ isActive }) => (isActive ? "" : "")}
            >
              My Recommendations
            </NavLink>
          </button>
        </>
      )}
    </>
  );

  //logout button handled
  const handleLogOut = () => {
    logOut()
      .then(() => {
        //console.log("logged out");
        toast.success("You have logged out successfully", {
          position: "top-center",
        });
        //console.log("logged out");
        navigate("/");
      })
      .catch((err) => {
        toast.error(`there was an error : ${err}`, {
          position: "top-center",
        });
      });
  };

  return (
    <div className=" bg-accent/20 sticky top-0 z-10 backdrop-blur-md">
      <div className="w-11/12 mx-auto container navbar">
        {" "}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className=" font-bold text-base lg:text-2xl  gradient-text"
          >
            Suggestify
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">{links}</ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <span className="loading loading-bars loading-lg"></span>
          ) : user ? (
            <div className="flex items-center gap-2 ">
              <div className="group relative">
                <img
                  src={user.photoURL}
                  className="w-12 h-12 object-contain rounded-full"
                  alt=""
                />
                <span className="absolute top-[100%] left-[50%] transform -translate-x-1/2 bg-blue-200 text-black text-sm font-medium px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {user.displayName} <br />
                </span>
              </div>
              <button
                onClick={handleLogOut}
                className="btn bg-primary/20 hover:bg-primary text-text border-0"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <NavLink
                to="/login"
                className={
                  "btn bg-primary/20 hover:bg-primary text-text border-0"
                }
              >
                Login
              </NavLink>
            </div>
          )}
          <div className="ml-4">
            <Theme></Theme>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
