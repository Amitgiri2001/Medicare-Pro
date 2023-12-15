import { createSlice } from "@reduxjs/toolkit";


const authData = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
    },
    reducers: {
        logIn(state) {
            state.isAuthenticated = true;
            console.log("Login successful.....");
        },
        logOut(state) {
            state.isAuthenticated = false;
        }
    }
});

export const authActions = authData.actions;


//export reducer for setup the store
export default authData.reducer;