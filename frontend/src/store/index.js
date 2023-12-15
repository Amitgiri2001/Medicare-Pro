import { configureStore } from '@reduxjs/toolkit';
import searchDataReducer from './SearchDataReducer';
import authData from './AuthReducer';
import CartReducer from './CartReducer';


// use configureStore for merge multiple reducers

export default configureStore({
    reducer: {
        searchText: searchDataReducer,
        authSate: authData,
        cartData: CartReducer
    },
})