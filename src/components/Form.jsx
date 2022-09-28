import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const Form = ({ open, handleClose, counter }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            You got a score of {counter}! Submit Your Score!
          </Typography>
          <div>
            <form>
              <Typography>Your Name (or Nickname)</Typography>
              <TextField required label="Required"/>
            </form>
          </div>
          <Button variant="contained" color="success">Submit</Button>
          <Button variant="contained" color="success" onClick={handleClose}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default Form;