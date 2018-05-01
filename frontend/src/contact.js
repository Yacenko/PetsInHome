import React from 'react';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  
  DialogTitle,
} from 'material-ui/Dialog';
import axios from 'axios';


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

  //  handleChange = name => event => {
  //   this.setState({
  //     [name]: event.target.value,


  //   });
  // };

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
    })
  	


    axios.post('/contact', data, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
 
  render() {
 
    return (
      <div>
      <span>{this.props.text}</span>
      <p>
        <Button onClick={this.handleClickOpen}>Написать нам</Button>
      </p>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Напишите нам</DialogTitle>
          <DialogContent>
            
            <TextField
              autoFocus
              margin="dense"
              name="email"
              label="Ваш Email"
              type="email"
              fullWidth
              value={this.state.email} 
              onChange={this.handleEmailChange}
            />

            <TextField
            name="letter"
          	label="Письмо"
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
              Отмена
            </Button>
            <Button onClick={this.handleMail} color="primary">
              Отослать
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}