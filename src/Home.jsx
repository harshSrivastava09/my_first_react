import React from "react"
import web from "../src/images/img.gif"
const Home = ()=>{
    return(
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                <div className="row">
                <div className="col-10 mx-auto">
                <div className="row" style={{verticalAlign:"middle"}}>
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                    <h1 style={{fontFamily:"cursive"}} >
                        Grow your business with <strong style={{color:"#2B8CF3" ,fontFamily:"cursive"}} className="brand-name">Harsh</strong>
                    </h1>
                    <h1 className="my-3"> 
                        we are the team of awesome developers for making websites 
                    </h1>
                    <div className="mt-3">
                        <a href="" className="btn btn-outline-primary b-10">Get started</a>

                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={web} className="img-fliud animated" alt="default_img" style={{display:"flex",position:"relative",top:"5px",left:"600px"}}/>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                </div>

            </section>
        </>
    )
}
export default Home