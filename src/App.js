import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import PersonalDetails from "./Components/PersonalDetails/PersonalDetails";
import LoginPage from "./Components/LoginSignup/LoginPage";
import SignupPage from "./Components/LoginSignup/SignupPage";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/ProductDetailedView/ProductDetails";
import { Provider } from "react-redux";
import store from "./store/store";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import AdminUserData from "./AdminComponents/UserData";
import AvailableProducts from "./AdminComponents/AvailableProducts";
import AdminHomepage from "./AdminComponents/AdminHomepage";

// import {useEffect, useState} from "react" ;

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/settings" element={<PersonalDetails />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/adminuserdata" element={<AdminUserData />} />
            <Route path="/availableproducts" element={<AvailableProducts />} />
            <Route path="/adminhomepage" element={<AdminHomepage />} />
            

          </Routes>
        </BrowserRouter>
      </Provider>
      {/* {message} */}
    </div>
  );
}

export default App;
