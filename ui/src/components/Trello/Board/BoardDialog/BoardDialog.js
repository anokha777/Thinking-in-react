import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';

import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
  return (
    <Draggable>
      <Paper {...props} />
    </Draggable>
  );
};

class BoardDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            newBoardName: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAddBoard = this.handleAddBoard.bind(this);
    }
  

  handleClickOpen = () => {
    this.setState({ openModal: true });
  };

  handleClose = () => {
    this.setState({ newBoardName: '' });
    this.setState({ openModal: false });
  };

  handleAddBoard = () => {
      if (this.state.newBoardName !== '') {
          this.props.onDialogBoardnameAdded(this.state.newBoardName);
          this.setState({ openModal: false });
      }
      this.setState({ newBoardName: '' });
  };

  handleChange(e) {
    this.setState({ newBoardName: e.target.value });
  };

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add Board
        </Button>
        <Dialog
          open={this.state.openModal}
          onClose={this.handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle id="draggable-dialog-title">Add new board</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="standard-required"
              name="boardtitle"
              ref="boardtitleRef"
              label="Board Title"
              required
              fullWidth
              onChange={ this.handleChange }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleAddBoard} color="primary">
              Add Board
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default BoardDialog;
