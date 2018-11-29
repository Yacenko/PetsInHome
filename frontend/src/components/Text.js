import React from 'react';

/**
 * Component to show texts in an application
 * @param props
 * @returns {XML}
 * @constructor
 */
const Text = (props) => {
  const re = /\r\n*/;
  const text = (props.text || '').split(re)
		.map(item => `<p class="paragraph">${item}</p>`);

	return (
		<span dangerouslySetInnerHTML={{__html: text}}></span>
	);
};

export default Text;
