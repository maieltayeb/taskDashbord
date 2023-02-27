import axios from "axios";

import {GET_All_Users, Add_User} from '../reducers/userReducer' 

export const getAllUsers=function(){
    return function(dispatch){
        return (
        axios.get('https://maieltayeb.github.io/Data/data.json')

        .then((res)=>{
      
         const users=res.data.users;
        
      
         dispatch(GET_All_Users(users)) 
    
    
        })
        .catch(err=>{
          console.log(err);
        })
    
        )
    
    }
}




/************************************************************************ */
export const addUser=function(newUser){
    return function(dispatch){
        return(
            axios.post('https://maieltayeb.github.io/Data/data.json',newUser)
            .then((res)=>{
            let user={...res.data}
          
           if(res.status===201){
            dispatch(Add_User(user))
             
           }
  
            })
            .catch((err)=>{
                console.log(err);
            })
           
        )
    }
}






