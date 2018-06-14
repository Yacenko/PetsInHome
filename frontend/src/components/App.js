import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import '../App.css';
import Menu from './Menu';
import StepperContainer from './StepperContainer';
import Text from './Text';
import Contact from './Contact';
import AnimalContainer from './AnimalContainer';
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';

import getText from '../utils/get-text';
import SearchContainer from "./SearchContainer";

const CONTACT_TEXT = 'contact';
const ABOUT_US_TEXT = 'usText';
const MAIN_TEXT = 'text';

const App = (props) => {
  const { language, handleLanguageChange, translations } = props;
  const contactText = getText(CONTACT_TEXT);
  const aboutUsText = getText(ABOUT_US_TEXT);
  const mainText = getText(MAIN_TEXT);

  // TODO add loader

  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Link to="/"><img alt="" src="/logo.jpg" width="80" height="80" /></Link>
          <h2>Pets at Home</h2>

          <Menu />

          <Select
            value={language}
            onChange={handleLanguageChange}
            autoWidth={true}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="ru">Русский</MenuItem>
            <MenuItem value="ua">Українська</MenuItem>
          </Select>
        </div>

        <div className="Main-text">
          <SearchContainer />

          <Route exact path="/" render={()=> <Text text={mainText}/>}/>
          <Route exact path="/us" render={()=> <Text text={aboutUsText}/>}/>
          <Route exact path="/contact" render={()=> <Contact text={contactText}/>}/>
          <Route exact path="/animal" component={AnimalContainer} />
          <Route exact path="/test" component={StepperContainer} />

          <Button color="primary" component={Link} to="/test">Начать тест</Button>
        </div>
      </div>
    </Router>
  );
};

export default App;