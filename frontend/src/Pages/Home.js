import React, { Component } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import {Link} from "react-router-dom";
import "./home.css"
// import Recipecards from "../Components/recipecards"
import powerslap from "../video/powerslap3.mp4";
import DisplayRecipie from "./DisplayRecipe";
import List from "./List";




function Home(){
    return(
        <div>
                <Navbar/>
                {/* <Recipecards/> */}
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
              <div className="display">
              <DisplayRecipie/>
              <List/>
             
              <input type="submit" className="refresh" value="Refresh page"/>
              <Footer/>
              </div>
            
        </div>
    );
}

export default Home;