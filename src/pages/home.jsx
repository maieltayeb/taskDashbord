import React from "react";
import { useHistory  } from "react-router-dom";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
const Home=()=>{
    const quizzes=useSelector((state)=>state.quizzes)
    console.log("quizzes",quizzes)
const history=useHistory()

 const handelOnAddQuiz=()=>{
    history.push('/addQuiz')
// console.log("from add quiz")
 }   
 const handelOnEditQuiz=(e,quiz)=>{

history.push(`/editQuiz/${quiz.id}`)
 }

return(
    <>
    <h1>Quizzes</h1>
     <ul>
        {quizzes.map((quiz)=> <li><span>{quiz.title}</span>
             <button onClick={(e)=>handelOnEditQuiz(e,quiz)}>edit</button></li>)}
   
         
     </ul>
    <button onClick={()=>handelOnAddQuiz()}>Create New Quiz</button>
    </>
)

}
export default Home;