import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
        text: 'text from the database'
    }
  }


  //все обработчики должны быть внутри компонента надо использовать
  // стрелочные ф-и, чтоб иметь возможность обратиться именно к этому компоненту через this
  chooseForBase = (e) => {

    console.log('event: ', e);
    console.log("button pressed");

    fetch("http://bla-bla.com").then((res) => {
        console.log(res);

        this.setState({text: res});
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <button onClick={this.chooseForBase}>Choose</button>

          <p>
              Some default text: {this.state.text}
          </p>
      </div>
    );


}
 


export default App;
