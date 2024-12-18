import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function Booklist(){
  return (
    <>
    <div className="booklist">
     
      <Book />
      <Book />
      <Book /><Book /><Book /><Book /><Book /><Book /><Book />
    </div>
    
    </>
  );
}
function Book(){
  return (
    <>
    <div className="Book">

    <img src="https://images-na.ssl-images-amazon.com/images/I/9101MLPcFTL._AC_UL254_SR254,254_.jpg" alt="" />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi libero ipsam, explicabo soluta itaque aliquam doloremque vel dolore nesciunt adipisci.</p>
    <h3>56$</h3>
    </div>

    </>
  );
}

ReactDOM.render(<Booklist />,document.getElementById("root"));