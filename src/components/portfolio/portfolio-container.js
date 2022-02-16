import React, { Component }  from "react"
import axios from 'axios';

import PortfolioItem from "./portfolio-item.js"

export default class PortfolioContainer extends Component {

  constructor() {
    super();
    this.state = {
      pageTitle: "Portfolio Categories",
      isLoading: false,
      data : []
    }
    this.handleFilter = this.handleFilter.bind(this);
  }

  getPortfolioItems(){
    axios
      .get('https://opt1.devcamp.space/portfolio/portfolio_items')
      .then(res => {
        // handle success
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
    //
    //column_names_merged_with_images" ]
    //
    return this.state.data.map(i => {
      return <PortfolioItem 
        key = {i.id}
        
        item={i}

        />;
    })
  }

  TEST = () => {
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
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h4>{this.state.pageTitle}</h4>

        <div className="portfolio-items-wrapper">
          <button className="btn" 
            onClick={() => this.handleFilter('eComerce')}>eCommerce
          </button>

          <button className="btn" 
            onClick={() => this.handleFilter('Scheduling')}>Scheduling
          </button>

          <button className="btn" 
            onClick={() => this.handleFilter('Enterprise')}>Enterprise
          </button>

          {this.PortfolioItems()}
        </div>
      </div>
    );
  }
} 
