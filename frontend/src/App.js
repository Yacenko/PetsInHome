import React, { Component } from 'react';

import './App.css';
import Menu from './menu';
import Search from './search';
import Stepper from './stepper';



class App extends Component {
    constructor(props) {
        super();

        this.state = {
            text: 'text from the database',
            value: 0
        }
    }

    


    //все обработчики должны быть внутри компонента надо использовать
    // стрелочные ф-и, чтоб иметь возможность обратиться именно к этому компоненту через this
   
    // chooseForBase = (e) => {     

    //         this.setState({text: res});
    // };

    render() {
        return (
            <div className="App">
                <div className="App-header">

                <img src="./PetsInHome/frontend/src/logo.jpg" width="80" height="80"></img>

                    <h2>Pets at Home</h2>

                    
                    <Menu /> 
                    
                    
                </div>
            
               
                
                <div className="Main-text">
                <Search />
                <p>
                    <Stepper />//Some default text: {this.state.text}
                </p>

                <button onClick={this.chooseForBase}>Начать тест</button>
                
                </div>


            </div>
        );


    }
}
 


export default App;
