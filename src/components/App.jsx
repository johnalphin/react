
import React, { useState } from  "react";
import Header from "./header";
import contacts from "./contacts";

function App() {

  const[value,setvalue]= useState(8000);

  function con1(){
    setvalue(3000);
  }
  function con2(){
    setvalue(5000);
  }
  function all(){
    setvalue(8000);
  }
  
function display(contact)
{
  if(value>contact.name)
return <Header key={contact.id} name={contact.name} img={contact.img}></Header>

}


  return (<div id="react">
  <div> <button onClick={con1}>below 3000</button>
  <button onClick={con2}>below 5000</button>
  <button onClick={all}>All</button></div>
 
    {contacts.map(display)}
    </div>
    
  );
}

export default App;
