import React, { Component } from 'react';

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
  

  handleChange(event) {
    console.log("handle change", event);
    this.setState({
      [event.target.name]: event.target.value
  })
  }
  handleSubmit(event) {
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
              placeholder="Portfolio Item Name"
              value={this.state.name}
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

