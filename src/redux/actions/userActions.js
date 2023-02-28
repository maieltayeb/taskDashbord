import axios from "axios";

import {GET_All_Users, Add_User} from '../reducers/userReducer' 

export const getAllUsers=function(){
    return function(dispatch){
        return (
        axios.get('https://dashbord-9926e-default-rtdb.firebaseio.com/users.json')

        .then((res)=>{
      
         const users=res.data;
      
         let newUsers=[]
         for (const key in users) {
          
            newUsers.push({id:key,...users[key]})
           }
        
     //console.log("from dddd",newUsers);
      
         dispatch(GET_All_Users(newUsers)) 
    
    
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
            axios.post('https://dashbord-9926e-default-rtdb.firebaseio.com/users.json',newUser)
            .then((res)=>{

                const id=res.data.name;
                if(res.status===200){
                 dispatch(Add_User({...newUser,id}))
                  
                }
          
  
            })
            .catch((err)=>{
                console.log(err);
            })
           
        )
    }
}






