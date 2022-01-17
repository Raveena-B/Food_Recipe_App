import React from "react";
import Navbar from "../Components/navbar";
import Recipecards from "../Components/recipecards"
import powerslap from "../video/powerslap3.mp4";


function Home(){
    return(
        <div>
                <Navbar/>
                <Recipecards/>
              <video 
              autoPlay 
              loop
              muted
              style={{
                  position:"absolute",
                  width:"100%",
                  left:"50%",
                  top:"-292px",
                  height:"100%",
                  objectFit:"cover",
                  transform:"translate(-50%,50%)",
                  zIndex:"-1",
                  
                  
              }}>
                  <source src={powerslap} type="video/mp4"/>

                  
              </video>
             
        </div>
    );
}

export default Home;