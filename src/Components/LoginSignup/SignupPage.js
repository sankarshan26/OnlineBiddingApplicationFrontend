import { Link } from "react-router-dom";
import Header from "./Header";
import Signup from "./Signup";
// import Navbar from "../NavigationBar/Navbar"

export default function SignupPage() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-gray-900 flex justify-start px-5 py-2">
        <Link to="/signup">
          <img
            alt=""
            className="w-[100px]  "
            src="./Speed Bids-logos_white.png"
          />
        </Link>
      </div>
      <div className=" flex justify-center flex-col items-center mt-6">
        <Header
          heading="Signup to create an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/login"
        />
        <Signup />
      </div>
    </>
  );
}
