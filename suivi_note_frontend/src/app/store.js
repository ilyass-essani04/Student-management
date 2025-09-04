import {configureStore} from '@reduxjs/toolkit' ;
import classSlice from '../features/classSlice';
import studentSlice from '../features/studentSlice';


const store = configureStore({
    reducer : {
        // auth: 
        classes: classSlice,
        students: studentSlice,
        // suivi: 
    }
})

export default store;