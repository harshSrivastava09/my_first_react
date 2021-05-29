import React from 'react'
import {useParams,useLocation,useHistory} from "react-router-dom"
// const User  = ({match})=>{
//     return(
//         <>
//         <h1>This is {match.params.name}</h1>
//         </>
//     )
// }
const User  = ()=>{
    const {fname,lname} = useParams()
    const location = useLocation()
    const history = useHistory()
    console.log(history);
    
    return(
        <>
        <h1>This is {fname} {lname}</h1>
        <p>My Current Location is {location.pathname}</p>
        {location.pathname=== "/user/Harsh/srivastava"?<button onClick={()=>{
            // history.goBack()
            history.push("/about")
        }}> Click me</button>:null}
        </>
    )
}
export default User