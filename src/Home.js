import React, { useState } from 'react';
import Component1 from './Component/Component1/Component1';
import Component2 from './Component/Component2/Component2';
import './Home.css';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setDisplayValue(inputValue);
    setInputValue(''); // Xóa input sau khi gửi
  };

  return (
    <div className="container">
      {displayValue && <div className="display-area">{displayValue}</div>}
      <Component1
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Nhập dữ liệu..."
      />
      <Component2 onClick={handleSubmit} />
    </div>
  );
}

export default Home;