import cartReducer from "./CartSlice"
import {configureStore} from "@reduxjs/toolkit"
const appstore=configureStore({
    reducer:{
         cart:cartReducer,
    }
})
export default appstore;