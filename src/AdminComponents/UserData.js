import React, { useState, useEffect } from "react";
import Axios from "axios";
import AdminNavbar from "./AdminNavbar";

function UserData() {
  const [users, SetUsers] = useState([]);
  const handleDelete = (email)=>{
    Axios.delete("https://oblinebidappbackend.onrender.com/deleteuser/"+email)
    .then(result=>{console.log(result);
    window.location.reload()})
    .catch(err=>console.log(err))
  }
  
  useEffect(() => {
    Axios.get("https://oblinebidappbackend.onrender.com/getallusers")
      .then((result) => SetUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className="relative overflow-x-auto mt-4 md:mt-10 mx-6 md:mx-10">
        <table className="w-full text-base text-left rtl:text-right text-gray-500 ">
          <thead className="text-lg text-gray-700 uppercase bg-gray-200 ">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Username
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Email ID
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Address
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Zipcode
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Wallet
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                {""}
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 text-center">{user.username}</td>
                  <td className="px-6 py-4 text-center">{user.fullname}</td>
                  <td className="px-6 py-4 text-center">{user.email}</td>
                  <td className="px-6 py-4 text-center">{user.address}</td>
                  <td className="px-6 py-4 text-center">{user.zipcode}</td>
                  <td className="px-6 py-4 text-center">{user.wallet}</td>
                  <td className="px-6 py-4 text-center">
                    <button className="bg-red-400 text-white font-medium py-1 lg:py-2 px-3 rounded-lg"
                    onClick={(e)=>{
                      handleDelete(user.email)
                    }}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserData;
