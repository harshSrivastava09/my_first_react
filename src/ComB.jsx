import React,{useContext} from 'react'
// import ComC from './ComC'
import {FirstName,LastName} from "./App1"

const ComB= ()=>{
    const fname = useContext(FirstName)
    const lname = useContext(LastName)
    return(
        <>
            {/* <ComC/> */}
            <h1>
                Hello my name is {fname} {lname}
            </h1>
        </>
    )
}
export default ComB