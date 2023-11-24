import {configureStore } from "@reduxjs/toolkit" ;
import navbarReducer from "./navbarSlice";
import ProductDetailedViewSlice from "./ProductDetailedViewSlice";
import loggedin_userDetailsSlice from "./LoginDetailsSlice";
const store = configureStore({
    reducer : {
        navbar : navbarReducer,
        productdetailedview : ProductDetailedViewSlice,
        loggedin_userDetails : loggedin_userDetailsSlice,

    }
})

export default store ;