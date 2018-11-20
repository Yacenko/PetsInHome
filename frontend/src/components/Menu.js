import React from 'react';

import Paper from 'material-ui/Paper';
import Tabs, {Tab} from 'material-ui/Tabs';
import {
  Link
} from 'react-router-dom';

import getTranslations from '../utils/get-translation';

import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    backgroundColor: '#9ACD32'
  }
};

/**
 * Navigation menu
 */
// TODO paper - classes
// TODO tabs - classes, theme
// TODO tab - classes
class Menu extends React.Component {
  handleChange = (event, value) => {
    this.setState({value});
  };

  render() {
    const { classes, className } = this.props;

    return (
      <Paper>
        <Tabs
          className={classNames(classes.root, className)}
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

export default withStyles(styles)(Menu);
