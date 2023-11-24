import React from "react";
import Navbar from "../NavigationBar/Navbar";
import GooglePay from "./GooglePayButton";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {useState} from "react" ;
import { changeUser } from "../../store/LoginDetailsSlice";
import Axios from "axios";


function PersonalDetails() {
  const activeUser = useSelector(
    (state) => state.loggedin_userDetails,
    shallowEqual
  );
  
  const [Address, setAddress] = useState(activeUser.address);
  const [zipcode, setZipcode] = useState(activeUser.zipcode) ;
  const [wallet , setWallet] = useState(activeUser.wallet) ;
  const dispatch = useDispatch() ;
   async function handleSubmit(e) {
    e.preventDefault();
    await dispatch(
      changeUser({
        password : activeUser.password, 
        username : activeUser.username ,
        email : activeUser.email,
        address : Address ,
        zipcode : zipcode ,
        fullname : activeUser.fullname,
        wallet : activeUser.wallet
      })
    )
    
    console.log(activeUser.password)

    await Axios.put("https://oblinebidappbackend.onrender.com/updateuser",{
      password : activeUser.password, 
      username : activeUser.username ,
      email : activeUser.email,
      address : Address ,
      zipcode : zipcode ,
      fullname : activeUser.fullname,
      wallet : activeUser.wallet
    })
    .then(result=>console.log(result))
    .catch(err=> console.log(err))


    
    
  }
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  {/* <p>Please fill out all the fields.</p> */}
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label for="full_name">Full Name</label>
                      <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-400"
                        value={activeUser.fullname}
                        disabled
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label for="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-400"
                        value={activeUser.email}
                        disabled
                      />
                    </div>

                    <div className="md:col-span-4">
                      <label for="address">Address</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={Address}
                        onChange={(e)=>{setAddress(e.target.value)}}
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label for="zipcode">Zipcode</label>
                      <input
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={zipcode}
                        onChange={(e)=>{setZipcode(e.target.value)}}
                      />
                    </div>

                    <div className="md:col-span-5 text-center pt-2">
                      <div className="inline-flex items-end justify-center">
                        <button
                          className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded"
                          onClick={(e) => {
                            handleSubmit(e);
                          }}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Wallet Details</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <span>Current Wallet Amount : </span>
                      <span className="font-medium text-lg">
                        {activeUser.wallet}$
                      </span>
                    </div>
                    <div className="md:col-span-5">
                      <label for="amount_added">
                        Amount to be added in the wallet
                      </label>
                      <input
                        type="text"
                        name="amount_added"
                        id="amount_added"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="10$"
                        onChange={(e)=>{setWallet(e.target.value)}}
                      />
                    </div>

                    <div className="md:col-span-5 text-center pt-2">
                      <div className="inline-flex items-end justify-center">
                        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Submit
                        </button> */}
                        <GooglePay />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PersonalDetails;
