import React from "react";

const Contact=()=>{
    return (
        <>
        <div className="my-4">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <form>
                    <div class="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
    <label for="exampleFormControlInput1">Mobile</label>
    <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Enter Your Mobile Number"/>
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Enter Your Email Id"/>
    <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
  </div>
  </div>
                    </form>
                </div>
            </div>
        </div>

        </>
    )
}
export default Contact;