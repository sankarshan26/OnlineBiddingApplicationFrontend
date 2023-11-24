import Header from "./Header"
import Login from "./Login"
import {Link} from "react-router-dom"
// import Navbar from "../NavigationBar/Navbar"

export default function LoginPage(){
    return(
        <>
        {/* <Navbar /> */}
        <div className="bg-gray-900 flex justify-start px-5 py-2">
        <Link to="/login">
          <img
            alt=""
            className="w-[100px]  "
            src="./Speed Bids-logos_white.png"
          />
        </Link>
      </div>
        <div className=" flex justify-center flex-col items-center mt-6">
             <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
            <Login />
        </div></>
    )
}