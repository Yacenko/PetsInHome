import React from 'react';

/**
 * Component that shows all information about some animal
 * TODO describe data structure
 */
const Animal = (props) => {
  return (
    <div>
      <img src={props.animal.src} alt="" />
      <p>
        <span> {props.animal.name} </span>
      </p>
      <span> {props.animal.text} </span>
    </div>
  )
};

export default Animal;
