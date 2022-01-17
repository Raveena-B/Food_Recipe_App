import React from "react";
import Navbar from "../Components/navbar";
import "./addrecipe.css";



function AddRecipe(){
    return  (
       
             <div>
                  <Navbar/><br></br>
             <h2 className="font">Add a Recipe</h2>
             <form action="get" className="container">
             <div className="row">
                 <div className="col-25">
                 <b><label for="recipename" >Recipe Name</label></b>
                 </div>
                 <div className="col-75">
                <input 
                    type="text"
                    placeholder="Enter the Recipe Name"
                    name="recipename"
                />
                </div>
             </div><br></br>

             <div className="row">
                 <div className="col-25">
                    <b><label for="ingredients" >Ingredients</label></b>
                 </div>
                 <div className="col-75">
                <textarea 
                    type="text"
                    placeholder="Enter the ingredients"
                    name="ingredients"
                />
                </div>
             </div><br></br>

             <div className="row">
                 <div className="col-25">
                 <b><label for="discription" >Description</label></b>
                 </div>
                 <div className="col-75">
                <textarea 
                    type="text"
                    placeholder="Enter the Description"
                    name="discription"
                    
                />
                </div>
             </div><br></br>
            <br></br>
             <div class="row">
                <input type="submit" value="Save"/>
             </div>
            
            </form>
            
        </div>
        
      
    )
    };


export default AddRecipe;