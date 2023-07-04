//import React and useState() hook
import React, { useState } from 'react';

//create HomePage react functional component
const HomePage = ({ items }) => {
  //this hook is used for selecting dropdown options with initial value as empty text
  const [optionValue, setOptionValue] = useState('');
  //this hook is used for items array with initial value as empty array
  const [itemsArray, setItemsArray] = useState([]);

  //this function is called when mouse over the dropdown
  const mouseOverHandler = () => {
    //once function called, setting items array with items[]
    setItemsArray(items);
  };

  //this function is called when clicked on the dropdown's option
  const optionClickHandler = (value) => {
    //once function called, setting the option value with selected option text
    setOptionValue(value);
  };

  //this function is called when click anywhere
  const clickHandler = () => {
    //once function called setting the items array with empty array []
    setItemsArray([]);
  };

  //this will render on home page
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
