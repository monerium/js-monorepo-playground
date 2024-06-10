import { useState } from 'react';
import MUIBottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import RepeatIcon from '@mui/icons-material/Repeat';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Paper } from '@mui/material';

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
