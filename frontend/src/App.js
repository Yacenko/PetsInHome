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
import Contact from './contact';
import Animal from './Animal';


import axios from 'axios'; 

class App extends Component {
  constructor(props) {
    super();

        this.state = {
          questions: [],
          text: [],
          animalId: null,
          animal: {},
          animals: [],
          src: ""  //начальное значение.
        }
  }

  handleAnimalChange = (animalId) => {
    axios.get(`/animals/${animalId}`).then((res) => {

      //console.log(res);

      this.setState({animalId});
      this.setState({animal: res.data[0]});
    });



      
        
      //}


    //console.log('animalId', animalId);
    
  };

  // animalsName = (animals) => {
  //   this.setState({animals});
  // };

  componentDidMount() {
    const urls = ['questions', 'text', 'animals/all'];

    let promises = urls.map(url => fetch(url).then(results => results.json()));

    Promise.all(promises).then(results => {
      
      console.log("results",results);
      
      this.setState({
        questions: results[0], 
        text: results[1][2].text, 
        usText: results[1][1].text, 
        contact: results[1][0].text, 
        animals: results[2]
      });

 // запрос на животное писание
    }) 
    
    .catch((error) => { console.error(error); 
    });


    

};

    


    

  render() {

     console.log('render App', this.state.animalId);


    return (
      <Router>
        
          

          <div className="App">
            <div className="App-header">
              <Link to="/"><img alt="" src="/logo.jpg" width="80" height="80" /></Link>
              <h2>Pets at Home</h2>
              <Menu />
            </div>
            <div className="Main-text">
              <Search handleAnimalChange={this.handleAnimalChange} animals={this.state.animals}/>
                  <Route exact path="/" render={()=> <Text text={this.state.text}/>}/>
             
                  <Route exact path="/us" render={()=> <Text text={this.state.usText}/>}/>
                  <Route exact path="/contact" render={()=> <Contact text={this.state.contact}/>}/>
                  <Route exact path="/animal" render={()=> <Animal animal={this.state.animal}/>}/>

                  <Route path="/test" render={()=> <Stepper steps={this.state.questions} animals={this.state.animals}/>}/>
                  
              
              <Button color="primary" component={Link} to="/test">Начать тест</Button>

            </div>
          </div>
        
      </Router>
    );
  }
}


export default App;
