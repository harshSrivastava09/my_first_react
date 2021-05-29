// import React, { createContext } from 'react'
// import ComA from "./ComA"
// const FirstName = createContext()
// const LastName = createContext()
// const App1 = ()=>{
//     return(
//         <>
//         <FirstName.Provider value ={"Harsh"}>
//         <LastName.Provider value={"srivastava"}>
//             <ComA/>
//             </LastName.Provider>
//         </FirstName.Provider>
//         </>
//     )
// }
// export default App1
// export {FirstName,LastName}

import React from 'react'
import {Switch,Route,Redirect} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import About from "./About"
import Error from "./Error"
import Contact from "./Contact"
import Navbar from './Navbar'
import User from "./User"
import Search from "./Search"
import Service from './Service'
import Home from "./Home"
const App1 = ()=>{
    return(
        <>
        <Navbar/>
            <Switch>
                <Route path= "/home" component={Home} exact/>    
                <Route path= "/about" component={()=><About name="About"/>} exact/>         
                <Route path="/contact" render={()=><Contact name="Contact"/>}/>
                <Route path="/search" render={()=><Search/>}/>                
                <Route path="/service" component={()=><Service name="Service"/>}/>
                <Route path="/user/:fname/:lname" component={User}/>
                <Redirect to="/"/>
                <Route component={Error}/>
            </Switch>
        </>
    )
}
export default App1