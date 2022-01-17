import React,{useState} from "react";
import Navbar from "../Components/navbar";
import axios from "axios";
import "./addrecipe.css";
import Footer from "../Components/Footer";


function AddRecipe(){
    
    const [loading, setLoading] = useState(false); 
    const [isError, setIsError] = useState(false);

    const [newUser, setNewUser] = useState(
        {

            recipename: '',
            ingredients : '',
            description : '',
           

        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setIsError(false); //additional


        const formData = new FormData();
        formData.append('recipename', newUser.recipename);
        formData.append('ingredients', newUser.ingredients);
        formData.append('description', newUser.description);
    
       
        axios.post('http://localhost:8070/recipe/add', formData)
             .then(res => {
                console.log(res);
                setLoading(false);
                alert("Recipe  is uploaded successfully")
                setNewUser({recipename :'' , ingredients : '' , description : '' })
             })
             .catch(err => {
                console.log(err);
                setLoading(false);
                setIsError(true);
                alert(err);
             });
            
    }

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
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
                    value={newUser.recipename}
                    onChange={handleChange} required
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
                    value={newUser.ingredients}
                    onChange={handleChange} required 
                />
                </div>
             </div><br></br>

             <div className="row">
                 <div className="col-25">
                 <b><label for="discription">Description</label></b>
                 </div>
                 <div className="col-75">
                <textarea 
                    type="text"
                    placeholder="Enter the Description"
                    name="discription"
                    value={newUser.discription}
                    onChange={handleChange} required
                    
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
        
        {/* <a href="/add-recipe"><button
                        type="submit"
                        className="btn btn-success"
                        
                        ><i class="fa fa-refresh" aria-hidden="true"></i> Refresh</button></a> */}
            
        </div>
        
        
    )
    };


export default AddRecipe;