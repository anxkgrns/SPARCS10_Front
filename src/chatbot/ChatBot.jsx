import * as React from 'react';
import './ChatBot.css';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

const fabStyle = {
    position: 'fixed',
    bottom: 76,
    right: 16,
  };

function handleClick() {
  location.href = '/chatbot';
}

export default function FloatingActionButtons() {
    
  return (
    <Box >
      <Fab sx = {fabStyle} color="primary" aria-label="add"
      onClick={() => {
        handleClick();
      }}
      >
        <AddIcon/>
      </Fab>
      {/* <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab> */}
      {/* <Fab variant="extended">  
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab> */}
      {/* <Fab aria-label="like">
        <FavoriteIcon />
      </Fab> */} 
    </Box>
  );
}
