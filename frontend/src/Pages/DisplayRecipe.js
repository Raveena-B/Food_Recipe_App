import React, { useState } from 'react';
import axios from 'axios';
import './displayrecipe.css';
import {Link} from "react-router-dom";


export default class DisplayRecipie extends React.Component {               //create DisplayRecipie method
  state = {
    query: "",             
    data: [],
    filteredData: []
  };

 
  handleInputChange = event => {                 //handle th event
    const query = event.target.value;
     
    this.setState(prevState => {
    const filteredData = prevState.data.filter(element => {
    return element.recipename.toLowerCase().includes(query.toLowerCase());
    });

      return {
        query,
        filteredData
      };
    });
  };

   getData = () => {                          //fetch data from th edatabase
    fetch(`http://localhost:8070/recipe`)
      .then(response => response.json())
      .then(data => {
        const { query } = this.state;
        const filteredData = data.filter(element => {
          return(
        element.recipename.toLowerCase().includes(query.toLowerCase()) >= 0 ||          //the way or style that data should be display
        element.ingredients.toLowerCase().includes(query.toLowerCase()) >= 0 ||
        element.description.toLowerCase().includes(query.toLowerCase()) >= 0 
        
      )
      });

        this.setState({
          data,
          filteredData
        });
      });
  };

  componentWillMount() {        //create a state
    this.getData();
  }

  render(){
    return (
    
       <div className="App">
         <h1>All Recipies</h1>  <br></br>          {/*get the data*/ }
   
   
         {/* Display data from API */}
         <div className="students"  style={{width:"95%",marginLeft:"50px"}}>
           {this.state.filteredData.length ===0?(<div className="alert alert-danger" style={{marginLeft:"50px"}}>
           <center>Data is not found
           <img src="notfound.jpg" style={{width:"50%"}}/></center> <br/><br/><br/><br/><br/><br/><br/>
          </div>
           ):(this.state.filteredData.map)(i => 
           
              <p>
                 <div className="student" style={{width:"95%",marginLeft:"50px"}}>
                   <h3 className="badge bg-success">Recipe</h3>
   
                   <div className="details">
                     <div>
                       <div style={{float:"right"}}>
                         
                       </div>
                       <p >????<b style={{color:"red"}}>recipename  : </b>{i.recipename}</p>
                       <p >????<b style={{color:"green"}}>ingredients : </b>{i.ingredients} </p>
                       <p >????<b style={{color:"purple"}}>description  : </b>{i.description} </p>
                       
                     </div>
                   
                     <a href="/edit"><button className="btn btn-secondary">Edit</button></a>
                     <> </>
                     <a href="/delete"><button className="btn btn-secondary">Delete</button></a>
                     
       
                   </div>
                 </div>
             
          </p>
             )}
         </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
         
   
       </div>
        
        
       
      
       
     );
   }
 }