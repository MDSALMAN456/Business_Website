import React from "react";
import { NavLink } from "react-router-dom";
const Common=(props)=>{
    return (
        <>
            <section className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                      <div className="row"> 
                      <div className="col-md-6 mt-5">
                      <h1 className="header">{props.name} <strong>iBlonde Solution</strong></h1>
                      <h3 className="mt-4 mb-4">We are a Team of Talented Developer And We are Providing all types of IT Solution </h3>
                      <NavLink className="btn-started " to={props.visit}>{props.btnname}</NavLink>
                      </div>
                      <div className="col-md-6">
                      <img src={props.imgsrc} className="Img" alt="cover-img"/>
                      </div>

                      </div>
                </div>
            </div>
                
        </div>
        </section>
        </>
    )
}
export default Common;