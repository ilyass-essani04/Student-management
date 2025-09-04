import { createSlice } from "@reduxjs/toolkit";




const ClassSlice = createSlice({
    name : "classes",
    initialState: {
        list: [],
        status: "idle", // idle | loading | succeeded | failed
        error: null
      },
    reducers :{
        AddClasse:(state, action)=>{ 
            const {name,Ncycle,Nsemaine} = action.payload
            state.list.push({id: Date.now(),name,Ncycle,Nsemaine})
            console.log(Date.now())
        }, 
        RemoveClass:(state, action)=>{
            state.list = state.list.filter((classe) => classe.id !== action.payload )
        },
        EditClass:(state, action)=>{
            const {id ,name ,Ncycle ,Nsemaine} = action.payload;
            const classe = state.list.find((classe) => classe.id === id );

            if(classe){
                classe.id = id; // Update ..
                classe.name = name;
                classe.Ncycle = Ncycle;
                classe.Nsemaine = Nsemaine;
            }
        }
    }
})


export const { AddClasse ,RemoveClass ,EditClass } = ClassSlice.actions;
export default ClassSlice.reducer;