import React from 'react'; 
import "./component2.css"
function Component2({onClick }) {
  return (
      <button className="component2"
      onClick={onClick}>Gửi</button>
  );
}

export default Component2;