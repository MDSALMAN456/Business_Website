import React from "react";


const Login=()=>{
    return (
        <>
        <div className="container login_page">
        <div className="col-md-10 mx-auto">
        <div className="row mx-auto">
        <div className="col-md-6 login_welcome shadow my-5">
           <div className="px-5 ">
            <h1>Welcome to <br/><strong><span className="text-light"> iBlonde Solution</span></strong></h1><br/>
            <p>"We are a team of website designers and developers continuously seeking newest website design
             technologies and online marketing techniques to make sure we provide outstanding services."</p>
            <button className="btn-started ">Learn More</button>
            </div>
        </div>
            <div className="col-md-6 login_main my-5 shadow">
                <h1 className="mt-5 text-center mb-5">Login</h1>
                <form>
                <div className="input-group mt-3 mb-3 px-5">
                <span className="input-group-text"><i class="fas fa-user"></i></span>
                <input type="email" class="form-control" placeholder="Username" autoComplete="off" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
              <div className="input-group mb-4 px-5">
                <span className="input-group-text"><i class="fas fa-unlock"></i></span>
                <input type="password" class="form-control" placeholder="Password" autoComplete="off" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
              <div className="text-center">
              <button className="btn-started px-5">Login</button>
              </div>
              </form>
            </div>

        </div>
        </div>

        </div>

        </>
    )
}
export default Login;