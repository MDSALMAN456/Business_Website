import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Avatar from 'react-avatar';

const ContactList=()=>{
    const [user,setUser]=useState([]);
    const [searchTerm,setsearchTerm]=useState("");

    const loaduser=async()=>{
        const res=await axios.get("http://localhost:3002/users");
        setUser(res.data);
    
    }
    useEffect(()=>{
        loaduser()
    },[]);

    const deleteUser=async(id)=>{
        const res=await axios.delete(`http://localhost:3002/users/${id}`)
        loaduser();
    }
    const deleteContact=(id)=>{
        deleteUser(id);
    }
    
    return (
        <>
        
        <div className="container">
        <div className="search_add">
        <input type="text/number" placeholder="Search your Contacts" className="mx-3 search_input "
         onChange={(event)=>{setsearchTerm(event.target.value)}}/>
        <NavLink exact to="/contact/addcontact" className="btn btn-success my-2">Add Contacts</NavLink>
       
        
        </div>
        <table className="table shadow">
  <thead className="table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Mobile</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
      user.filter((elem)=>{
          if(searchTerm==""){
              return elem
          }
          else if (elem.name.toLowerCase().includes(searchTerm.toLowerCase())){
              return elem
          }
          else if(elem.email.toLowerCase().includes(searchTerm.toLowerCase())){
              return elem
          }

          else if(elem.mobile.includes(searchTerm)){
              return elem
          }

      }).map((user,index)=>{
          return(
              <>
              <tr key={user.id}>
      <th scope="row">{index+1}</th>
      <td><Avatar size="40" name={user.name} round style={{marginRight:"10px"}}/>{user.name}</td>
      <td>{user.mobile}</td>
      <td>{user.email}</td>
      <td> 
      <NavLink className="btn btn-dark mx-2" exact to={`/contact/view/${user.id}`}>View</NavLink>
      <NavLink className="btn btn-warning mx-2" exact to={`/contact/editcontact/${user.id}`}>Edit</NavLink>     
      <button className="btn btn-danger" onClick={()=>deleteContact(user.id)}>Delete</button>
      </td>
    </tr>
              </>
          )

      })
  }
   
  </tbody>
</table>

        </div>

        </>
    )
}
export default ContactList;