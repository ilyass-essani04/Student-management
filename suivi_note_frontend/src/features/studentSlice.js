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
            const {name, classId, Ncycle, Nsemaine} = action.payload
            state.liste.push({id: Date.now(), name, classId})
            // console.log(state.liste)
        },
        RemoveStudent:(state, action)=>{
            state.liste = state.liste.filter((student) => student.id !== action.payload )
        },
        EditStudent:(state, action)=>{
            const {id, name, classId} = action.payload;
            const student = state.liste.find((student)=>student.id === id );

            if(student){
                student.name = name;
                student.classId = classId
            }
        }
    }
})


export const { AddStudents ,RemoveStudent ,EditStudent } = StudentSlice.actions;
export default StudentSlice.reducer;