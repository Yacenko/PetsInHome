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
import Button from 'material-ui/Button';
import Text from './text';
import Ustext from './us';
import Contact from './contact';

class App extends Component {
  constructor(props) {
    super();

        this.state = {
          questions: [],
          text: []
        }
    }


componentDidMount(){
// Promise.all([ 
//     fetch('questions'), 
//     fetch('text') 
//   ]).then((response) => { 
//     //response[0].json();
//     response.json(); 
//   }) 
//     .then((responseJson) => { 
//       console.log(responseJson[0], responseJson[1]); 
//       //this.setState({questions: responseJson[0], text: responseJson[1]}); 
//     }) 
//     .catch((error) => { console.error(error); 
//     });


    const urls = ['questions', 'text', 'ustext', 'contact'];

    let promises = urls.map(url => fetch(url).then(results => results.json()));

    Promise.all(promises).then(results => {
      
      console.log("results",results);
      
      this.setState({questions: results[0], text: results[1][0].text, ustext: results[2][0].ustext, contact: results[3][0].text}); 
    }) 
    .catch((error) => { console.error(error); 
    });


    // Promise.all(urls.map(fetch)).then(responses =>
    //   Promise.all(responses.map(res => res.json())
    // ).then(responses => {
    //   console.log(responses);
    // });



};

    
    

    //все обработчики должны быть внутри компонента надо использовать
    // стрелочные ф-и, чтоб иметь возможность обратиться именно к этому компоненту через this
   
    //chooseForBase = (e) => {     

      //    this.setState({show: true});
    //};

  render() {
    return (
      <Router>
        
          

          <div className="App">
            <div className="App-header">
              <Link to="/"><img alt="" src="/logo.jpg" width="80" height="80" /></Link>
              <h2>Pets at Home</h2>
              <Menu />
            </div>
            <div className="Main-text">
              <Search />
                  <Route exact path="/" render={()=> <Text text={this.state.text}/>}/>
             
                  <Route exact path="/us" render={()=> <Text text={this.state.ustext}/>}/>
                  <Route exact path="/contact" render={()=> <Contact text={this.state.contact}/>}/>
             
              <p>
                  <Route path="/test" render={()=> <Stepper steps={this.state.questions}/>}/>
                  
              </p>
              <Button color="primary" component={Link} to="/test">Начать тест</Button>

            </div>
          </div>
        
      </Router>
    );
  }
}


export default App;
