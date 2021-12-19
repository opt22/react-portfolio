import React, { Component }  from "react"
import axios from 'axios';

import PortfolioItem from "./portfolio-item.js"

export default class PortfolioContainer extends Component {

  constructor() {
    super();
    this.state = {
      pageTitle: "Constructor Title",
      isLoading: false,
      data : [
        { title: "First-data", category: "eComerce", slug: "first-d" },
        { title: "Second-data", category: "Scheduling", slug: "second-d" },
        { title: "Third-data", category: "Enterprise", slug: "third-d" },
        { title: "Fourth-data", category: "eComerce", slug: "fourth-d" }
      ]
    }
    console.log("Portfolio Container has rendered");
    this.handleFilter = this.handleFilter.bind(this);
    this.getPortfolioItems = this.getPortfolioItems.bind(this);
  }

  getPortfolioItems(){
    axios
      .get('https://opt1.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        // handle success
        console.log(response);
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .then( {
        // always executed
      });
  }

  PortfolioItems(){
    return this.state.data.map(i => {
      return <PortfolioItem title = {i.title} url = {"google.com"} slug={i.slug} />;
    })
  }

  TEST = () => {
    console.log("asdf")
  }

  handleFilter(ipt){
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === ipt
      })
    })
  }

  render() {
  this.getPortfolioItems();
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
        <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>
        <h2>End Portfolio Container</h2>
      </div>
    );
  }
} 
