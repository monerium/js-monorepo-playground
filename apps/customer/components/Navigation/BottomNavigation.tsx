import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import RepeatIcon from '@mui/icons-material/Repeat';
import MUIBottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

const BottomNavigation = () => {
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <MUIBottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Accounts" icon={<MenuIcon />} />
        <BottomNavigationAction label="Add money" icon={<AddIcon />} />
        <BottomNavigationAction
          label="Send money"
          icon={<ArrowForwardIcon />}
        />
        <BottomNavigationAction label="Swap" icon={<RepeatIcon />} />
      </MUIBottomNavigation>
    </Paper>
  );
};
export default BottomNavigation;
