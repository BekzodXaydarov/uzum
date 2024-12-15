import { createSlice } from "@reduxjs/toolkit"

const Cart = createSlice({
    name: "cart",
    initialState: JSON.parse(localStorage.getItem("cart")) || [],
    reducers: {
        addProduct: (state, { payload }) => {
            const product = state.filter((item) => item.id == payload.id)[0]
            if (product) {
                state = state.map((item) => item.id == product.id ? { ...product, count: product.count + 1 } : item)
            } else {
                state.push({ ...payload, count: 1 })
            }
            localStorage.setItem("cart", JSON.stringify(state))
            return state
        },
        deleteProduct: (state, { payload }) => {
            state = state.filter((item) => item.id != payload)
            localStorage.setItem("cart", JSON.stringify(state))
            return state
        },
        counter: (state, { payload }) => {
            const product = state.filter((item) => item.id == payload.id)[0]
            if (payload.type == "+") {
                state = state.map((item) => item.id == product.id ? { ...product, count: product.count + 1 } : item)
            }
            if (payload.type == "-") {
                state = state.map((item) => item.id == product.id ? { ...product, count: product.count - 1 } : item).filter((item) => item.count > 0)
            }
            localStorage.setItem("cart", JSON.stringify(state))
            return state
        }
    }
})

export const { addProduct, deleteProduct, counter } = Cart.actions
export default Cart.reducer



// Xaydarovdev