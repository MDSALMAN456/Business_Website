import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

const View=()=>{
    const[user,setUser]=useState([]);
    const {id}=useParams();

    const loaduser=async()=>{
        const res=await axios.get(`http://localhost:3002/users/${id}`);
        setUser(res.data)
    };
    
    useEffect(()=>{
        loaduser();
    },[]);
    return(
        <>

        <div className="container">
            <div className="row">
            <div className="col-md-5 mx-auto my-4 shadow">
             <h1 className="text-center my-4">View Contact</h1>
             <input className="form-control mb-3" disabled value={user.name}/>
             <input className="form-control mb-3" disabled value={user.mobile}/>
             <input className="form-control mb-3" disabled  value={user.email}/>
             <NavLink className="btn btn-dark  mb-5 mt-3" exact to="/contact">Go Back</NavLink>
           
           
            </div>

            </div>
        </div>

        </>
    )
}
export default View;