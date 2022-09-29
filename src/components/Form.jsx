import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Form = ({ open, handleClose, counter, scoreSubmit, name, handleNameChange }) => {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <form id="score-form" onSubmit={scoreSubmit}>
        <DialogTitle>You got a score of {counter}! Submit Your Score!</DialogTitle>
        <DialogContent>
          <DialogContentText>Your Name (or Nickname)</DialogContentText>
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="Required"
            type="text"
            variant="standard"
            value={name}
            onChange={handleNameChange}
          />
        </DialogContent>
        </form>
        <DialogActions>
          <Button variant="contained" color="success" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="success" type="submit" form="score-form" onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Form;