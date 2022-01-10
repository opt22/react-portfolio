import React, { Component } from "react"
import axios from "axios"

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component {
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
  
  constructor() {
    super();

    this.state = {
      portfolioItems: []
    };

this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this)

this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this)
this.handleDeleteClick = this.handleDeleteClick.bind(this)
}

handleDeleteClick(portfolioItem) {
  console.log("handleDeleteClick", portfolioItem);
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

handleSuccessfulFormSubmission(portfolioItem) {
  //TODO
  // update the portfolioItems state
  // and add the portfolioItem to the list
  console.log("handleSuccessfulFormSubmission after api call");
  console.log("check portfolioItem");
  console.log(portfolioItem);
  console.log("end check portfolioItem");
  this.setState({
    portfolioItems: [portfolioItem].concat( this.state.portfolioItems )
  })

}

handleFormSubmissionError(error) {
  console.log("handleFormSubmissionError ", error);
}

getPortfolioItems() {
    axios
      .get("https://opt1.devcamp.space/portfolio/portfolio_items", {
        withCredentials: true
      })
      .then(response => {
        this.setState({
          portfolioItems: [...response.data.portfolio_items]
        });
        console.log("RESPONSE FROM GET PORTFOLIO ITEMS");
        console.log(this.state.portfolioItems);
      })
      .catch(error => {
        console.log("error in getPortfolioItems", error);
      });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
  render(){
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <h1>Portfolio Form....</h1>
          <PortfolioForm 
            handleSuccessfulFormSubmission = {this.handleSuccessfulFormSubmission}
            handleFormSubmissionError = {this.handleFormSubmissionError}
          />
        </div>

        <div className="right-column">
          <PortfolioSidebarList 
            handleDeleteClick={this.handleDeleteClick}
            data={this.state.portfolioItems}
          />

        </div>
      </div>
    )
  }
}
