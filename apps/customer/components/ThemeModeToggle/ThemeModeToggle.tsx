'use client';
import { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import IconButton from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';

export const ThemeModeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { mode, setMode } = useColorScheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // SSR
    return null;
  }

  const setThemeMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    Cookie.set('themeMode', newMode);
  };

  return (
    <Tooltip
      title={mode === 'dark' ? 'Turn on the light' : 'Turn off the light'}
    >
      <IconButton
        color="primary"
        size="small"
        disableTouchRipple
        disabled={!mode}
        onClick={setThemeMode}
      >
        {mode === 'dark' ? (
          <DarkModeOutlined fontSize="small" />
        ) : (
          <LightModeOutlined fontSize="small" />
        )}
      </IconButton>
    </Tooltip>
  );
};
