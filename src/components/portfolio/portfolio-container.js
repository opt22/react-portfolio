import React, { Component }  from "react"
import axios from 'axios';

import PortfolioItem from "./portfolio-item.js"

export default class PortfolioContainer extends Component {

  constructor() {
    super();
    this.state = {
      pageTitle: "Constructor Title",
      isLoading: false,
      data : []
    }
    console.log("Portfolio Container has rendered");
    this.handleFilter = this.handleFilter.bind(this);
    //removed bind for this.getPortfolioItems
  }

  getPortfolioItems(){
    axios
      .get('https://opt1.devcamp.space/portfolio/portfolio_items')
      .then(res => {
        // handle success
        console.log("res data", res);
        this.setState({
          data: res.data.portfolio_items
        })
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
    //Data that we we'll need:
    return this.state.data.map(i => {
      console.log("item data", i);
      return <PortfolioItem title = {i.name} url = {i.url} slug={i.id} description = {i.description} key = {i.id} />;
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

  componentDidMount() {
    this.getPortfolioItems();
    console.log(this.state.data);
    console.log(this.state.data);
    console.log(this.state.data);
    console.log(this.state.data);
    console.log(this.state.data);
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
        <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>
        <h2>End Portfolio Container</h2>
      </div>
    );
  }
} 
