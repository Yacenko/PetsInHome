import React from 'react';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';

import axios from 'axios';

import getTranslations from '../utils/get-translation';

/**
 * Component that allows visitors contact application owner
 */
export default class FormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ 
    	open: true
    });
  };

  handleClose = () => {
    this.setState({ 
    	open: false,
    	email: '',
    	letter: ''
    });
  };

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  };

  handleLetterChange = (e) => {
    this.setState({letter: e.target.value});
  };

  handleMail = () => {
  	this.setState({ 
    	open: false,
    	email: '',
    	letter: ''
    });

  	let data = JSON.stringify({
      email: this.state.email,
      letter: this.state.letter,
    });

    axios.post('/contact', data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
  };
 
  render() {
    return (
      <div>
        <span>{this.props.text}</span>
        <p>
          <Button onClick={this.handleClickOpen}>{getTranslations('write_us')}</Button>
        </p>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{getTranslations('write_to_us')}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="email"
              label="Email"
              type="email"
              fullWidth
              value={this.state.email} 
              onChange={this.handleEmailChange}
            />
            <TextField
            name="letter"
          	label={getTranslations('letter')}
          	multiline
          	rowsMax="50"
          	value={this.state.letter}
          	onChange={this.handleLetterChange}
          	//onChange={this.handleChange('multiline')}
          	fullWidth
          	margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              {getTranslations('cancel')}
            </Button>
            <Button onClick={this.handleMail} color="primary">
              {getTranslations('send')}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
