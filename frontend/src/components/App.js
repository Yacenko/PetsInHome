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
      texts: [],
      animalId: null,
      animal: {},
      animals: [],
      src: "",
      language: process.env.REACT_APP_DEFAULT_LANGUAGE
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
        // [{_id: 1, number: 1, question: {en: 'question'}, keys: {en: 'key'}}]
        questions: results[0],
        // [{_id: 1, name: 'contact', text: {en: 'some_text'}}]
        texts: results[1],
        // usText: results[1][1].text,
        // contact: results[1][0].text,
        // [{_id: 1, id: 'cat', name: {ru: 'Кошка'}, keys: {ru: ['one', 'two'], src: 'path', text: {ru: 'description'}}}]
        animals: results[2]
      });
    })
    .catch((error) => {
      console.error(error);
    });
  };

  getText = (id) => {
    const { language } = this.state;
    return this.state.texts.length && this.state.texts.find(item => item.name === id).text[language];
  };

  // TODO button - classes
  render() {
    // TODO maybe move texts name to constants
    const contactText = this.getText('contact');
    const aboutUsText = this.getText('usText');
    const mainText = this.getText('text');

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
            <Route exact path="/" render={()=> <Text text={mainText}/>}/>
            <Route exact path="/us" render={()=> <Text text={aboutUsText}/>}/>
            <Route exact path="/contact" render={()=> <Contact text={contactText}/>}/>
            <Route exact path="/animal" render={()=> <Animal animal={this.state.animal}/>}/>

            <Route path="/test" render={() =>
              <Stepper
                language={this.state.language}
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
