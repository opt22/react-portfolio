//import React from "react";
//
////const PortfolioSidebarList = props => {
//  //const portfolioList = props.data.map(portfolioItem => {
//  //  return (
//  //    <div>
//  //      <div>
//  //        <img src="{portfolioItem.thumb_image_url}" alt="IMAGE THUMB"/>
//  //      </div>
//  //      <h3>{portfolioItem.name}</h3>
//  //      <h3>{portfolioItem.id}</h3>
//  //    </div>
//  //  );
//  //});
//  //
//const PortfolioSidebarList = props => {
//  const portfolioList = props.data.map(portfolioItem => {
//    return (
//      <div>
//        <div>
//          <img src={portfolioItem.thumb_image_url} />
//        </div>
//        <h1>{portfolioItem.name}</h1>
//        <h2>{portfolioItem.id}</h2>
//      </div>
//    );
//  });
//    
//console.log({props});
//  return(
//    <div>
//      <div>something</div>
//      <div>{portfolioList}</div>
//    </div>
//  )
//}
//
//export default PortfolioSidebarList


import React from "react";

const PortfolioSidebarList = props => {
  const portfolioList = props.data.map(portfolioItem => {
    return (
      <div>
        <div>
          <img src={portfolioItem.thumb_image_url} />
        </div>
        <h1>{portfolioItem.name}</h1>
        <h2>{portfolioItem.id}</h2>
      </div>
    );
  });

  return <div>{portfolioList}</div>;
};

export default PortfolioSidebarList;
