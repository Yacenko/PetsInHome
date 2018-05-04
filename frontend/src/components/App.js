import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import '../App.css';
import Menu from './Menu';
import Search from './Search';
import Stepper from './Stepper';
import Button from 'material-ui/Button';
import Text from './Text';
import Contact from './Contact';
import Animal from './Animal';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      text: [],
      animalId: null,
      animal: {},
      animals: [],
      src: ""
    };
  }

  /**
   * Called when user selects some animal in search
   * @param animalId
   */
  handleAnimalChange = (animalId) => {
    axios.get(`/animals/${animalId}`).then((res) => {
      this.setState({animalId});
      this.setState({animal: res.data[0]});
    });
  };

  /**
   * Load all needed data from server
   */
  componentDidMount() {
    const urls = ['questions', 'text', 'animals/all'];
    let promises = urls.map(url => fetch(url).then(results => results.json()));

    Promise.all(promises).then(results => {
      this.setState({
        // TODO add comment about data structure
        questions: results[0],
        // TODO add comment about data structure
        text: results[1][2].text,
        // TODO add comment about data structure
        usText: results[1][1].text,
        // TODO add comment about data structure
        contact: results[1][0].text,
        // TODO add comment about data structure
        animals: results[2]
      });
    })
    .catch((error) => {
      console.error(error);
    });
  };

  // TODO button - classes
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
            <Search handleAnimalChange={this.handleAnimalChange} animals={this.state.animals}/>
            <Route exact path="/" render={()=> <Text text={this.state.text}/>}/>
            <Route exact path="/us" render={()=> <Text text={this.state.usText}/>}/>
            <Route exact path="/contact" render={()=> <Contact text={this.state.contact}/>}/>
            <Route exact path="/animal" render={()=> <Animal animal={this.state.animal}/>}/>

            <Route path="/test" render={() =>
              <Stepper
                steps={this.state.questions}
                animals={this.state.animals}
                onAnimalSelect={(animal) => this.setState({animal})}
              />
              }
            />

            <Button color="primary" component={Link} to="/test">Начать тест</Button>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
