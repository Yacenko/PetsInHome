import React from 'react';

/**
 * Component that shows all information about some animal
 * TODO describe data structure
 */
const Animal = (props) => {
  const { animal, language } = props;

  return (
    <div>
      {animal.name &&
        <div>
          <img src={animal.src} alt="" />
          <p>
            <span> {animal.name[language]} </span>
          </p>
          <span> {animal.text[language]} </span>
        </div>
      }
    </div>
  )
};

export default Animal;
