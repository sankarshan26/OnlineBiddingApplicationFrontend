import React from "react";
import { Link } from "react-router-dom";

function AdminNavbar() {
    
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/adminhomepage" className="flex items-center">
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
              className="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logout
            </button></Link>
            
            
          </div>
          
        </div>
      </nav>

    </>
  );
}

export default AdminNavbar;
