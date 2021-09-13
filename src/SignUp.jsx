import React from "react";

const SignUp=()=>{
    return (
        <>
        <div className="container login_page">
        <div className="col-md-10 mx-auto">
        <div className="row mx-auto">
        <div className="col-md-6 login_welcome shadow my-5">
           <div className="px-5 ">
            <h1 className="">Welcome to <br/><strong><span className="text-light"> iBlonde Solution</span></strong></h1><br/>
            <p>"We are a team of website designers and developers continuously seeking newest website design
             technologies and online marketing techniques to make sure we provide outstanding services."</p>
            <button className="btn-started ">Learn More</button>
            </div>
        </div>
            <div className="col-md-6 login_main my-5 shadow">
                <h1 className="mt-3 text-center mb-3">SignUp</h1>
                <div className="mb-3 px-5">
                   <input type="text" className="form-control mb-2 rounded-pill " placeholder="First Name"/>
                   <input type="text" className="form-control mb-2 rounded-pill" placeholder="Last Name "/>
                   <input type="email" className="form-control mb-2 rounded-pill" placeholder="Email "/>
                   <input type="password" className="form-control mb-2 rounded-pill" placeholder="Password"/>
                   <input type="password" className="form-control mb-2 rounded-pill" placeholder="Confrim Password"/>
                   <div className="d-flex">
                   <input className="form-check-input me-1" type="checkbox" value=""/>
                   <p>I accept the <strong>Terms of use</strong> & <strong>Privacy Policy</strong></p>
                   </div>
                 </div>
              <div className="text-center">
              <button className="btn-started px-5">Login</button>
              </div>
            </div>

        </div>
        </div>

        </div>

        </>
    )
}
export default SignUp;