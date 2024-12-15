import { configureStore } from "@reduxjs/toolkit"
import Cart from "./cartSlice"

export const store = configureStore({
    reducer: {
        cart:Cart
    }
});