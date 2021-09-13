import React from "react";
import { NavLink } from "react-router-dom";

const Card=(props)=>{
    return (
        <>
            <div className="col-md-4 mx-auto shadow">
            <div class="card">
                   <img class="card-img-top" src={props.srcImg} alt="Card image cap" style={{height:"15rem"}}/>
                   <div class="card-body">
                     <h5 class="card-title">Card title</h5>
                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <NavLink to="" class="btn btn-primary">Go somewhere</NavLink>
                   </div>
                 </div>
            </div>
        </>
    )
}
export default Card