import React, { useState } from 'react';

const HomePage = ({ items }) => {
  const [optionValue, setOptionValue] = useState('');
  const [itemsArray, setItemsArray] = useState([]);

  const mouseOverHandler = () => {
    setItemsArray(items);
  };

  const optionClickHandler = (value) => {
    setOptionValue(value);
  };

  const clickHandler = () => {
    setItemsArray([]);
  };

  return (
    <>
      <div className='dropdown' onClick={clickHandler}>
        <h1>Should you use a dropdown ?</h1>
        <h2>{optionValue}</h2>
        <div className='dropdown-btn'>
          <button onMouseOver={mouseOverHandler}>Dropdown</button>
          <div className='dropdown-content'>
            {itemsArray.map((item, index) => {
              return (
                <div
                  key={index}
                  className='options'
                  onClick={() => optionClickHandler(item)}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
