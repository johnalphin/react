import React from  "react";

function Header(props) {
    return (
       
      <div id="main">
     
      <div id="detail">
      <h1>{props.name}</h1>
    </div>

      <div id="sub">
      <img src={props.img}></img>
      </div>
       </div> 
      
    );
  }
  
  export default Header;