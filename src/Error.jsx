import React from 'react'
import { NavLink } from 'react-router-dom'
const Error = ()=>{
    return (
        <>
        <h1 className="heading"> 404 Error page</h1>
        <marquee><p className="para" style={{color:"red",fontSize:"90px"}}>Sorry, This page does'nt exist</p></marquee>
        <NavLink to="/home" className="para" style={{textAlign:"center"}}>Go back</NavLink>
        </>
    )
}   
export default Error