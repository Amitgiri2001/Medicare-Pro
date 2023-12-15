import { createSlice } from '@reduxjs/toolkit';

export const searchData = createSlice({
    name: 'search',
    initialState: {
        value: "",
    },
    reducers: {
        update: (state, action) => {
            state.value = action.payload;
            // console.log(state.value);
        },

    },
})

// Action creators are generated for each case reducer function
export const searchActions = searchData.actions;

export default searchData.reducer