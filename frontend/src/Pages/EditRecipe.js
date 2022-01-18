import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from "react-router-dom";

export default class Edit extends Component {

  constructor(props) {

    super(props)
    
    this.onChangeMarketingFood_Item_Name = this.onChangeMarketingFood_Item_Name.bind(this);
    this.onChangeMarketingQuantity = this.onChangeMarketingQuantity.bind(this);
    this.onChangeMarketingDescription = this.onChangeMarketingDescription.bind(this);
    this.onChangeMarketingDiscount_Rate = this.onChangeMarketingDiscount_Rate.bind(this);
    this.onChangeMarketingPrior_Price = this.onChangeMarketingPrior_Price.bind(this);
    this.onChangeMarketingPresent_Price = this.onChangeMarketingPresent_Price.bind(this);
    this.onChangeMarketingPhoto = this.onChangeMarketingPhoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    

    // State
    this.state = {
     recipename: '',
     ingredients: '',
     description: '',
      
      
    }
  }

  onChangeMarketingFood_Item_Name(e) {
    this.setState({ recipename: e.target.value })
  }

  onChangeMarketingQuantity(e) {
    this.setState({ ingredients: e.target.value })
  }

  onChangeMarketingDescription(e) {
    this.setState({ description: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()

    const formData = new FormData();
       
        formData.append('recipename', this.state.recipename);
        formData.append('ingredients', this.state.ingredients);
        formData.append('description', this.state.description);
        

    axios.put('http://localhost:8070/recipe/update/' + this.props.match.params.id, formData)
      .then((res) => {
        console.log(res.data)
        alert('Recipe successfully updated')
      }).catch((error) => {
        console.log(error)
      })
      // Redirect to recipe List 
    this.props.history.push('/edit')
    
  }

  render() {
    const { recipename , ingredients , description };
    return (
        <div>
            
            <div className="form-wrapper container" style={{width:"50%"}}><br/><br/>
                <h1>Current Info 👁</h1>
                <table>

                    <td controlId="recipename">
                    <label>recipename</label>
                    <input type="text" value={recipename} onChange={this.onChangerecipename} required disabled/>
                    </td>

                    <td controlId="ingredients">
                    <label>ingredients</label>
                    <input type="text" value={ingredients} onChange={this.onChangeingredients} required disabled/>
                    </td>

                    <td controlId="description">
                    <label>description</label>
                    <input type="text" value={description} onChange={this.onChangedescription} required disabled/>
                    </td>

                </table>
                </div>
                <div className="form-wrapper container" style={{width:"50%"}}><br/><br/>
                <h1>Need to Update ? 🤔</h1>
                <Form onSubmit={this.onSubmit}>
               
                    <Form.Group controlId="recipename">
                    <Form.Label>recipename</Form.Label>
                    <Form.Control type="text" value={this.state.recipename} onChange={this.onChangerecipename} 
                    placeholder="✍🏻 Edit recipename" required />
                    </Form.Group>

                    <Form.Group controlId="ingredients">
                    <Form.Label>ingredients</Form.Label>
                    <Form.Control type="text" value={this.state.ingredients} onChange={this.onChangeingredients}
                     placeholder="✍🏻 Edit ingredients" required/>
                    </Form.Group>

                    <Form.Group controlId="description">
                    <Form.Label>description</Form.Label>
                    <Form.Control type="text" value={this.state.description} onChange={this.onChangedescription}
                     placeholder="✍🏻 Edit description" required/>
                    </Form.Group>

                    
                    <br/>

                    <br/>
                    <Button variant="danger" size="lg" block="block" type="submit">
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Update Recipe
                    </Button>
                    </Form><br/><br/><br/><br/>
                </div>
             
        </div>
       );
  }

}