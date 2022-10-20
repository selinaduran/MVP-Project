import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const VillagerInfo = ({ villager, handleClose, open }) => {
  return (
    <div>
      <Dialog className="dialogContainer" open={open} onClose={handleClose}>
          <DialogTitle className="dialogTitle">Get to Know <b className="dialogCharacterName">{villager.name["name-USen"]}</b>!</DialogTitle>
          <div className="dialogImageContainer">
            <img className="dialogImage" src={villager.image_uri}/>
          </div>
          <DialogContent>
            <DialogContentText><b>Personality:</b> {villager.personality}</DialogContentText>
            <DialogContentText><b>Birthday:</b> {villager["birthday-string"]}</DialogContentText>
            <DialogContentText><b>Species:</b> {villager.species}</DialogContentText>
            <DialogContentText><b>Gender:</b> {villager.gender}</DialogContentText>
            <DialogContentText><b>Subtype:</b> {villager.subtype}</DialogContentText>
            <DialogContentText><b>Hobby:</b> {villager.hobby}</DialogContentText>
            <DialogContentText><b>Catch-Phrase:</b> "{villager["catch-phrase"]}"</DialogContentText>
            <DialogContentText><b>Saying:</b> "{villager.saying}"</DialogContentText>
          </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default VillagerInfo;