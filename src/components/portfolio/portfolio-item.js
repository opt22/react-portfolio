import React, { Component } from "react"
import { Link } from "react-router-dom"


export default class PortfolioItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItemClass: ""
    }
  }

  handleMouseEnter(){
    this.setState({portfolioItemClass: "image-blur" });
  }
  handleMouseLeave(){
    this.setState({portfolioItemClass: "" });
  }

  render(){
    //Data that we we'll need:
    // - background image : thumb_image_url
    // - logo : logo_url
    // + description : description
    // + id : id
    //
    const {id, name, description, thumb_image_url, logo_url, url} = this.props.item;
    console.log(this.props.item);

    return(
      /*<Link to={`/portfolio/${id}`}>*/
      /*<Link to={`${url}`}>*/
      <Link to={{
        pathname: url
        }}
        target="_blank"
      >
      <div 
        className="portfolio-item-wrapper"
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        <div 
          className={"portfolio-img-background " + this.state.portfolioItemClass}
          style={{
            backgroundImage: "url(" + thumb_image_url + ")"
          }}
        />

        <div className="img-text-wrapper">
          <div className="logo-wrapper">
            <img src={logo_url} alt="logo" />
          </div>
          
          <div className="subtitle">{description}</div>
        </div>
        <div>{name}</div>
        <div>{description}</div>
      </div>          
    </Link>
    )
  }
}
  
