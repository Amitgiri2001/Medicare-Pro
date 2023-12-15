import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartItems: [{ id: 1, qty: 12 }]
}
const cart = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id)

            if (!existingItem) {
                // If the item doesn't already exist, add it to the cart
                state.cartItems = [...state.cartItems, action.payload]
            }
            else {
                // If the item already exists, update its quantity
                const updatedCartItems = state.cartItems.map(item =>
                    item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
                );
                state.cartItems = [...updatedCartItems]

            }
            console.log(state.cartItems);



        },

        removeFromCart(state, action) {
            state.cartItems = [state.cartItems.filter((item) => item.id !== action.payload.id)];
        },
        increaseQuantity(state, action) {
            return {
                cartItems: state.cartItems.map((item) => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            qty: item.qty + 1
                        };
                    } else {
                        return item;
                    }
                })
            };
        },
        decreaseQuantity(state, action) {
            return {
                cartItems: state.cartItems.map((item) => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            qty: item.qty - 1
                        };
                    } else {
                        return item;
                    }
                })
            };
        }

    }
});

export const cartActions = cart.actions;
export default cart.reducer;