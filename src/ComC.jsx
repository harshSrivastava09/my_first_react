import React from 'react'
import {FirstName,LastName} from "./App1"
const ComC= ()=>{
    return(
        <>
        <FirstName.Consumer>{(fname)=>{
           return (
               <LastName.Consumer>
                   {(lname)=>{
                   return  <h1>This is {fname} {lname}'s page</h1>
                   }}
               </LastName.Consumer>
           )
        }}</FirstName.Consumer>
        </>
    )
}
export default ComC