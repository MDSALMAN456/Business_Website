import React from "react";
import Image2 from "./image/cover-about.svg";
import Common from "./Common";

const About=()=>{
    return (
        <>
        <Common name="Welcome to About Page"
            imgsrc={Image2}
            btnname="Contact Now"
            visit="/about"
        />

        </>
    )
}
export default About;