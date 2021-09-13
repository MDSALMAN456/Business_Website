import React, {useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";
import { useParams } from "react-router";

const Edit=()=>{ 
    const [user,setUser]=useState({
        name:"",
        mobile:"",
        email:""
    });
    const{id}=useParams();
    const history=useHistory();

    const getInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value
        
        setUser({
            ...user,[name] :value}
        )
    }
    const loaduser=async()=>{
        const res=await axios.get(`http://localhost:3002/users/${id}` ,user);
        setUser(res.data);
    }
    useEffect(()=>{
        loaduser();
    },[]);

    const sendUser=async()=>{
        await axios.put(`http://localhost:3002/users/${id}`,user)
    }

    const getSubmit=(e)=>{
        e.preventDefault();
        sendUser();
        history.push("/contact");

    }
    
    return(
        <>
        <div className="container">
        <div className="row">
        <div className="col-md-5 mx-auto my-4 shadow">
        <h1 className="text-center my-4">Edit Contact</h1>
            <form className="my-3" onSubmit={e=>getSubmit(e)}>
            <input type="text" className="form-control mb-3" placeholder="Enter Your First Name" value={user.name}name="name" onChange={e=>getInput(e)}/>
            <input type="number" className="form-control mb-3" placeholder="Enter Your Mobile Number " value={user.mobile} name="mobile" onChange={e=>getInput(e)}/>
            <input type="email" className="form-control mb-4" placeholder="Enter Your Email"  value={user.email} name="email" onChange={e=>getInput(e)}/>
            <button className=" btn btn-dark mx-2"type="submit">Submit</button>
            <NavLink className="btn btn-warning" exact to="/contact">Cancel</NavLink>
            </form>
       
        </div>

        </div>
           
            </div>
        </>
    )
}
export default Edit;