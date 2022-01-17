import React from "react";
import "./footer.css";

export default function Footer(){
    return(
        <footer className="background">
           
            <section
                className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
            >
           
               
            </section>
            
            
            <section className="">
                <div>
                <br></br>
                <div className="row mt-3">
                  
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                   
                    <h6 className="font">
                        MOTTO
                    </h6>
                    <p>
                    A Building With Four Walls And Tomorrow Inside.
                    </p>
                    </div>
                    
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                
                    <h6 className="font">
                        PRODUCTIVITY
                    </h6>
                    <p className="sublinks">
                        <a href="#!" className="text-reset">Experts</a>
                    </p>
                    <p  className="sublinks">
                        <a href="#!" className="text-reset">Popular Hotels</a>
                    </p>
                    <p  className="sublinks">
                        <a href="#!" className="text-reset">Tourism </a>
                    </p>
                    <p  className="sublinks">
                        <a href="#!" className="text-reset">Alumini</a>
                    </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                   
                    <h6 className="font">
                        USEFUL LINKS
                    </h6>
                    <p  className="sublinks">
                        <a href="#!" className="text-reset">Bank of Ceylon</a>
                    </p>
                    <p  className="sublinks">
                        <a href="#!" className="text-reset">Pinterest</a>
                    </p>
                    <p  className="sublinks">
                        <a href="#!" className="text-reset">Pronto</a>
                    </p>
                    <p  className="sublinks">
                        <a href="#!" className="text-reset">Help</a>
                    </p>
                    </div>
                   
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                   
                    <h6 className="font">
                        CONTACT
                    </h6>
                    <p  className="sublinks">NO 07,Seevali Road,Colombo 07</p>
                    <p  className="sublinks">
                        
                        inforecipebook@gmail.com
                    </p>
                    <p> + 94 11 2355381</p>
                    <p> + 94 77 0113437</p>
                    </div>
                
                </div>
                </div>
            </section>
            <div className="font1" >
                © 2022 Copyright:
                <a className="text-reset fw-bold" href="#">Recipe Book</a><br></br><br></br><br></br>
            </div>
           
        </footer>
    
    )
}