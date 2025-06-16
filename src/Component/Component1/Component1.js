import React from 'react';
import "./Component1.css"
function Component1({value, onChange, placeholder}) {
  return (
    <input type="text" 
    value={value}
    onChange={onChange} 
    placeholder={placeholder} className="component1"/>
  );
}

export default Component1;