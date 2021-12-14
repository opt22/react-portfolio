import React, { Component }  from "react"
import PortfolioItem from "./portfolio-item.js"

export default class PortfolioContainer extends Component {
  constructor() {
    super()

    this.state = {
      pageTitle: "Constructor Title",
      isLoading: false,
      data : [
        { title: "First-data", category: "eComerce" },
        { title: "Second-data", category: "Scheduling" },
        { title: "Third-data", category: "Enterprize" },
        { title: "Fourth-data", category: "eComerce" }
      ]
    }

    console.log("Portfolio Container has rendered");
    this.handleFilter = this.handleFilter.bind(this);
  }

  PortfolioItems(){
    return this.state.data.map(i => {
      return < PortfolioItem title = {i.title} url={"google.com"} />;
    })
  }

  TEST = () => {
    console.log("asdf");
  }

  handleFilter(ipt){
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === ipt
      })
    })
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h2>Portfolio Container</h2>
        <h2>Portfolio items go here...</h2>
        <h2>{this.state.pageTitle}</h2>
        {this.PortfolioItems()}
        <button onClick={() => this.handleFilter('eComerce')}>eCommerce</button>
        <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
        <button onClick={() => this.handleFilter('Enterprize')}>Enterprize</button>

        <h2>End Portfolio Container</h2>
      </div>
    );
  }
} 
