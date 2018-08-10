import React from 'react';

import Paper from 'material-ui/Paper';
import Tabs, {Tab} from 'material-ui/Tabs';
import {
  Link
} from 'react-router-dom';

import getTranslations from '../utils/get-translation';

/**
 * Navigation menu
 */
// TODO paper - classes
// TODO tabs - classes, theme
// TODO tab - classes
export default class Menu extends React.Component {
  handleChange = (event, value) => {
    this.setState({value});
  };

  render() {
    return (
      <Paper>
        <Tabs
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label={getTranslations('contact')} component={Link} to="/contact" />
          <Tab label={getTranslations('about_us')} component={Link} to="/us" />
        </Tabs>
      </Paper>
    );
  }
}
