import React, { useState, useEffect } from 'react';
import VillagerInfo from './VillagerInfo.jsx';

const Villager = ({ villager }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {setOpen(true)};
  const handleClose = () => {setOpen(false)};

  return (
    <>
      <div>
        <li className="character-name" onClick={handleClickOpen}>{villager.name["name-USen"]}</li>
      </div>
      <div>
        <VillagerInfo villager={villager} handleClose={handleClose} open={open}/>
      </div>
    </>
  )
}

export default Villager;