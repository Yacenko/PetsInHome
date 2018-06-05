import React from 'react';

import Paper from 'material-ui/Paper';
import Tabs, {Tab} from 'material-ui/Tabs';
import {
  Link
} from 'react-router-dom';

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
          <Tab label="Свяжитесь с нами" component={Link} to="/contact" />
          <Tab label={this.props.getTranslation('about_us')} component={Link} to="/us" />
        </Tabs>
      </Paper>
    );
  }
}
