import React from 'react';
import Text from './Text';

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
          <img src={animal.src} alt=""/>
          <p>
            <span> {animal.name[language]} </span>
          </p>
          <Text text={animal.text[language]} />
          
        </div>
      }
    </div>
  )
};

export default Animal;
