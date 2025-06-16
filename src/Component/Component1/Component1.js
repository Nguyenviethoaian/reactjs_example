import React from 'react';

function Component1({value, onChange, placeholder}) {
  return (
    <input type="text" 
    value={value}
    onChange={onChange} 
    placeholder={placeholder} />
  );
}

export default Component1;