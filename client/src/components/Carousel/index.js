import React from "react";

function Carousel({ children }) {
    return (
      <div>
          <ul className="carousel" style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}>
            
          </ul>
        {children}
      </div>
    );
  }
  
  export default Carousel;