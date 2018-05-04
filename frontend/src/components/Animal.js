import React from 'react';

class Animal extends React.Component {
	render() {
		return (
    	<div>
				<img src={this.props.animal.src} alt="" />
				<p>
					<span> {this.props.animal.name} </span>
        </p>
        <span> {this.props.animal.text} </span>
		  </div>
		)
	}
}

export default Animal;
