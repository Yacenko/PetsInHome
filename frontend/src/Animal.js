import React from 'react';






class Animal extends React.Component {



	//componentDidMount() { //найти аналог єтого, запускающийся каждій раз и обернуть запрос
    	

   //  	axios.get('/animals/', {
		 //  params: {
			// name: this.props.animal
		 //  }
   //  	})
   //    	.then(res => {
   //      console.log(res);
        
   //  	})


	//}





	render() {
		

     

    	return (

       
		<div>   
			<img src={this.props.animal.src} />     	
          <p> <span> {this.props.animal.name} </span> </p>
           <span> {this.props.animal.text} </span>
        </div>
	
		)


	}

}

export default Animal;