import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/App.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <Paper
      component="form"
      sx={{p: '10px', display: 'flex', alignItems: 'center', bgcolor:'#2D325A', boxShadow: 'none'}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color:'#ccc' }}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '10px', outline: 'none' }} aria-label="search" disableRipple>
        <SearchIcon sx={{color: '#B255DD'}}/>
      </IconButton>
    </Paper>
    </div>
  )
}

export default SearchBar;
