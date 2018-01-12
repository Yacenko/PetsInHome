import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import Menu from './menu';
import Search from './search';
import Stepper from './stepper';

const Component1 = () => (<p>Component1</p>);
const Component2 = () => (<p>Component2</p>);
const Component3 = () => (<p>Component3</p>);

class App extends Component {
  constructor(props) {
    super();

        this.state = {
          questions: []
        }
    }


    componentDidMount() {
      fetch('questions')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);

        this.setState({questions: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
    }

    //все обработчики должны быть внутри компонента надо использовать
    // стрелочные ф-и, чтоб иметь возможность обратиться именно к этому компоненту через this
   
    // chooseForBase = (e) => {     

  //         this.setState({text: res});
  // };

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/component1">Component 1</Link></li>
            <li><Link to="/component2">Component 2</Link></li>
            <li><Link to="/component3">Component 3</Link></li>
          </ul>

          <div className="App">
            <div className="App-header">
              <img src="/logo.jpg" width="80" height="80" />
              <h2>Pets at Home</h2>
              <Menu />
            </div>
            <div className="Main-text">

              <Route path="/component1" component={Component1}/>
              <Route path="/component2" component={Component2}/>
              <Route path="/component3" component={Component3}/>

              <Search />
              <p>
                  <Stepper steps={this.state.questions} />//Some default text: {this.state.text}
              </p>
              <button onClick={this.chooseForBase}>Начать тест</button>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
