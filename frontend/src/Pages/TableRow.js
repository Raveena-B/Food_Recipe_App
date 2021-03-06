import React, { Component } from 'react';
import { Link} from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class RecipeTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteRecipe = this.deleteRecipe.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:8070/recipe/delete/' + this.props.obj._id)
            .then((res) => {
                alert('Recipe is successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
            
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj. recipename}</td>
                <td>{this.props.obj.ingredients}</td>
                <td>{this.props.obj.description}</td>
                
                <td><img src ={"images/" + this.props.obj.photo} style={{width:"100px" , height:"100px"}} 
                className = "border border-danger rounded-circle"
                /></td>
                <td style={{width:"250px"}}>
                    <Link className="edit-link" to={`/edit-MarketingM/${this.props.obj._id}/${this.props.obj. recipename}/${this.props.obj.ingredients}/${this.props.obj.description}`}>
                        {/* <Button size="sm" variant="success"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</Button> */}
                    </Link >
                    
                        {/* <Button size="sm" onClick={() => window.location.reload(true) , this.deleteRecipe} variant="danger"><i class="fa fa-window-close" aria-hidden="true" ></i> Delete</Button> */}
                        {/* <a href="/edit-MarketingM"><Button
                         type="submit"  size="sm"
                        className="btn btn-primary"
                        ><i class="fa fa-refresh" aria-hidden="true"></i> Refresh</Button></a>  */}
                    
                </td>
            </tr>
        );
    }
}