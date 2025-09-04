import { createSlice } from "@reduxjs/toolkit";




const StudentSlice = createSlice({
    name : "students",
    initialState: {
        liste: [],
        status: "idle", // idle | loading | succeeded | failed
        error: null
      },
    reducers :{
        AddStudents:(state, action)=>{ 
            const {nom, classId} = action.payload
            state.liste.push({id: Date.now(), nom, classId})
            // console.log(state.liste)
        },
        RemoveStudent:(state, action)=>{
            state.liste = state.liste.filter((student) => student.id !== action.payload )
        },
        EditStudent:(state, action)=>{
            const nom = action.payload;
            const student = state.liste.find((student)=>student.id === id );

            if(student){
                student.id = id; // Update ..
                student.nom = nom;
            }
        }
    }
})


export const { AddStudents ,RemoveStudent ,EditStudent } = StudentSlice.actions;
export default StudentSlice.reducer;