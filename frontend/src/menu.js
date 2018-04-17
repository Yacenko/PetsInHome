import React from 'react';

import Paper from 'material-ui/Paper';
import Tabs, {Tab} from 'material-ui/Tabs';
import {
  Link
} from 'react-router-dom';



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
          <Tab label="Свяжитесь с нами" component={Link} to="/contact"></Tab>
          <Tab label="О нас" component={Link} to="/us"></Tab>
          
          


        </Tabs>

      </Paper>
    );

  }
}
