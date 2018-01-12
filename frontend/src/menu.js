import React from 'react';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, {Tab} from 'material-ui/Tabs';


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
          <Tab label="Item One"/>
          <Tab label="Item Two"/>


        </Tabs>

      </Paper>

    );

  }
}
