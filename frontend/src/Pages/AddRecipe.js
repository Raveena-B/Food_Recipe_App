import React,{useState} from "react";
import Navbar from "../Components/navbar";
import axios from "axios";
import "./addrecipe.css";



function AddRecipe(){
    
    const [loading, setLoading] = useState(false); 
    const [isError, setIsError] = useState(false);

    const[recipename,setRecipeName] = useState("");
    const[ingredients,setIngredients] = useState("");
    const[description,setDescription] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setIsError(false); //additional


    try {
        const {data} = await axios.post("http://localhost:8070/recipe/add" ,
         {recipename,ingredients,description});
         setRecipeName("");
         setIngredients("");
         setDescription("");

        alert('New Food upload successfully')

    } catch (error) {
        
        alert(error)
    }
}

    
    return  (
       
             <div>
                  <Navbar/><br></br>
             <h2 className="font">Add a Recipe</h2>
             <form action="get" className="container" onSubmit={handleSubmit} encType='multipart/form-data'>
             <div className="row">
                 <div className="col-25">
                 <b><label for="recipename" >Recipe Name</label></b>
                 </div>
                 <div className="col-75">
                <input 
                    type="text"
                    placeholder="Enter the Recipe Name"
                    name="recipename"
                    value={recipename}
                    onChange={(e)=>setRecipeName(e.target.value)} required
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
                    value={ingredients}
                    onChange={(e)=>setIngredients(e.target.value)} required 
                />
                </div>
             </div><br></br>

             <div className="row">
                 <div className="col-25">
                 <b><label for="description">Description</label></b>
                 </div>
                 <div className="col-75">
                <textarea 
                    type="text"
                    placeholder="Enter the Description"
                    name="description"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)} required 
                    
                />
                </div>
             </div><br></br>
            <br></br>
             
             <div>
                     {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
                     {/*decision*/}
                     <button className="row"
                        type="submit"
                        className="add"
                        disabled={loading}
                        ><i class="fa fa-upload" aria-hidden="true"></i> {loading ? 'Uploading...' : 'Upload'}
                     </button>
                    
            </div>
        </form>
        
            
        </div>
        
        
    )
    };


export default AddRecipe;