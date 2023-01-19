import { createSlice } from "@reduxjs/toolkit";

export const fakeStoreSlice = createSlice({
    name: "fakeStore",
    initialState: {
        products: [],
        cart: [],
        total: 0
    },
    reducers: {
        getApi: (state, action) => {
            state.products = action.payload
        },
        addToCart: (state, action) => {
            const productsState = JSON.parse(JSON.stringify(state.products))
            const cartState = JSON.parse(JSON.stringify(state.cart))

            const id = cartState.find(item => item.id === action.payload)
            let productAdd = productsState.find(p => p.id === action.payload)

            if (!id) {
                state.cart = [...state.cart, productAdd]
                state.total = state.total + productAdd.price
            }
        },
        removeFromCart: (state, action) => {
            const cartState = JSON.parse(JSON.stringify(state.cart))

            const productRemove = cartState.find(p => p.id === action.payload)

            state.cart = cartState.filter(p => p.id !== action.payload)
            state.total = state.total - productRemove.price
        },
        clearCart: (state, action) => {

        }
    }
})

export const { getApi, addToCart, removeFromCart } = fakeStoreSlice.actions

export default fakeStoreSlice.reducer