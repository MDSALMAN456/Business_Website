import React from "react";
import Image from "./image/cover.svg";
import Common from "./Common";

const Home=()=>{
    return (
        <>
        <Common name="Start Your Business with"
            imgsrc={Image}
            btnname="Get Started"
            visit="/service"
        />

        

        </>
    )
}
export default Home;