import {configureStore} from '@reduxjs/toolkit' ;
import classSlice from '../features/classSlice';


const store = configureStore({
    reducer : {
        // auth: 
        classes: classSlice,
        // students: 
        // suivi: 
    }
})

export default store;