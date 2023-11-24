import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { change } from "../../store/navbarSlice";
import { useDispatch, useSelector ,shallowEqual} from "react-redux"; // for putting something or changing some value in the store we use useDispatch
// for getting some value from the store we use useSelector
import { changeUser } from "../../store/LoginDetailsSlice";

function Navbar() {
  const dispatch = useDispatch();

  const active_st = useSelector(state => state.navbar, shallowEqual);
  
  const [smallNav, toggleSmallNav] = useState(false);
  const handleClick = (act_st) => {
    // console.log(act_st)
    dispatch(change(act_st));
    // console.log(act_st);
  };
  
  // const activeUser = useSelector(
  //   (state) => state.loggedin_userDetails,
  //   shallowEqual
  // );
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <img
                  className="h-13 w-20"
                  src="./Speed Bids-logos_white.png"
                  alt="logo"
                />
            </span>
          </Link>
          <div className="flex md:order-2">
            <Link to="/login">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={()=>{
              dispatch(
                changeUser({
                  email: "",
                  username: "",
                  fullname: "",
                  address: "",
                  zipcode: "",
                  wallet: "",
                  password : "",
                })
              );
            }}>
              Logout
            </button></Link>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
              onClick={() => {
                toggleSmallNav(!smallNav);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={
              smallNav
                ? "items-center justify-between w-full md:flex md:w-auto md:order-1"
                : "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            }
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button onClick={()=>{handleClick("home")}}> 
                <Link
                  to="/home"
                  className={
                    active_st.value === "home"
                      ? "block py-2 pl-3 pr-4 text-blue-700  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                  aria-current={active_st.value === "home" ? "page" : ""}
                  
                >
                  Home
                </Link></button>
              </li>
              <li>
                <button onClick={()=>handleClick("about")}>
                <Link
                  to="/about-us"
                  className={
                    active_st.value === "about"
                      ? "block py-2 pl-3 pr-4 text-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                  aria-current={active_st.value === "about" ? "page" : ""}
                  
                >
                  About
                </Link></button>
              </li>
              <li>
                <button onClick={()=>handleClick("account")}>
                <Link
                  to="/settings"
                  className={
                    active_st.value === "account"
                      ? "block py-2 pl-3 pr-4 text-blue-700  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                  aria-current={active_st.value === "account" ? "page" : ""}
                  
                >
                  Account
                </Link></button>
              </li>
              <li>
                <button onClick={()=>handleClick("contact")}>
                <Link
                  to="/contact-us"
                  className={
                    active_st.value === "contact"
                      ? "block py-2 pl-3 pr-4 text-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                  aria-current={active_st.value === "contact" ? "page" : ""}                  
                >
                  Contact
                </Link></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
