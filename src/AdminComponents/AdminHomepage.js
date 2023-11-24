import React from "react";
import AdminNavbar from "./AdminNavbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

function AdminHomepage() {
  return (
    <div className="flex flex-col gap-3 min-h-screen">
      <AdminNavbar />
      <div className="flex flex-1 gap-6 md:gap-7 lg:gap-10 min-w-screen justify-center items-center flex-wrap">
        <Link to="/adminuserdata">
          <div className="w-[200px] sm:w-[250px] aspect-square bg-yellow-400 text-white text-3xl font-semibold rounded-lg flex justify-center items-center cursor-pointer">
            User
          </div>
        </Link>
        <Link to="/availableproducts">
          <div className="w-[200px] sm:w-[250px]  aspect-square bg-red-400 text-white text-3xl font-semibold rounded-lg flex justify-center items-center cursor-pointer">
            Products
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default AdminHomepage;
