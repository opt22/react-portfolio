import React, { Component } from 'react';
import axios from 'axios';

export default class PortfolioForm extends Component {

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      category: "",
      position: "",
      url: "",
      thumb_image: "",
      banner_image: "",
      logo:""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
  //TODO
  //connect inputs to state
  buildForm() {
    let formData = new FormData();
    formData.append("portfolio_item[name]",this.state.name);
    formData.append("portfolio_item[description]",this.state.description);
    formData.append("portfolio_item[position]",this.state.position);
    formData.append("portfolio_item[url]",this.state.url);
    formData.append("portfolio_item[category]",this.state.category);

    return formData;
  }
  

  handleChange(event) {
    console.log("handle change", event);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    axios.post(
      "https://opt1.devcamp.space/portfolio/portfolio_items",
      this.buildForm(), 
      { withCredentials : true }
    ).then(
      response => {
        console.log("response: ",response);
      }).catch(error => {
        console.log("portfolio from handleSubmit error:", error);
      })

    event.preventDefault();
  }



//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
  render() {
    return (
      <div>
        <h1>portfolio form element</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <input  
              type="text"
              name="name"
              placeholder="Portfolio Item Name"
              value={this.state.name}
              onChange={this.handleChange}
            />          
            <input  
              type="text"
              name="url"
              placeholder="URL"
              value={this.state.url}
              onChange={this.handleChange}
            />          
          </div>
          <div>
            <input  
              type="text"
              name="position"
              placeholder="position"
              value={this.state.position}
              onChange={this.handleChange}
            />          
            <input  
              type="text"
              name="category"
              placeholder="category"
              value={this.state.category}
              onChange={this.handleChange}
            />          
          </div>

          <div>
            <input  
              type="text"
              name="description"
              placeholder="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>

           <div>
             <button type="submit" >SAVE</button>
           </div>

        </form>

      </div> 
    )
  }
}
