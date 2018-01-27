import React from 'react';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';





export default class FormDialog extends React.Component {
  state = {
    open: false,

  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

   handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

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
              id="name"
              label="Email"
              type="email"
              fullWidth
            />

            <TextField
            id="letter"
          	label="Письмо"
          	multiline
          	rowsMax="10"
          	value={this.state.multiline}
          	onChange={this.handleChange('multiline')}
          	fullWidth
          	margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Отмена
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Отослать
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}