import React, { Component } from "react";
import axios from 'axios';
// import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';
import {Link} from "react-router-dom";


export default class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Recipe: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8070/promotions')
      .then(res => {
        this.setState({
            Recipe: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.Recipe.map((res, i) => {
      return <TableRow obj={res} key={i} />;
    });
  }


  render() {
    return (
  
        <div>
       
        <div className="bg4"></div>
        <br/>
        <div className="table-wrapper container">
            {/* <Table striped bordered hoverstyle={{background:"#171717" , padding:"10px 10px 10px 10px" , opacity:"0.9"}}>
                <thead>
                    <tr>
                        <th>Recipe Name</th>
                        <th>Ingredients</th>
                        <th>Description</th>
                      
                    </tr>
                </thead>
                <tbody>
                    {this.DataTable()}
                </tbody>
            </Table> */}
        </div>
    </div>
    );
  }
}