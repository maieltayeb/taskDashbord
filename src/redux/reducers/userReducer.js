import {createSlice} from "@reduxjs/toolkit";
let State=[];
const userSlice=createSlice({
    name:"user",
    initialState:State,
    reducers:{
        GET_All_Users:(state,action)=>{
            state=action.payload    
          return  state
        },
        Add_User:(state,action)=>{
            
            state.push(action.payload)
        }, 
      
    }
})

export const {GET_All_Users, Add_User}=userSlice.actions;
export default userSlice.reducer;
