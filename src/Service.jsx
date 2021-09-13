import React from "react";
import Card from "./Card";
import card1 from "./image/card-1.jpg";
import card2 from "./image/card-2.jpg";
import card3 from "./image/card-3.jpg";
import card4 from "./image/card-4.jpg";
import card5 from "./image/card-5.jpg";
import card6 from "./image/card-6.jpg";

const Service=()=>{
    return (
        <>
        <div className="mt-4">
            <h1 className="text-center">Services</h1>
            </div>
            <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                    <Card srcImg={card1}/>
                        <Card srcImg={card2}/>
                        <Card srcImg={card3}/>
                        <Card srcImg={card4}/>
                        <Card srcImg={card5}/>
                        <Card srcImg={card6}/>
                       
                       
                        
                    </div>
                </div>
            
        </div>
        </div>
        
        

        </>
    )
}
export default Service;
