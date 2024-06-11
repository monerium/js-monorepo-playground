import { useEffect } from 'react';
import Image from 'next/image';
import cx from 'classnames';
import { useTransition } from 'react-transition-state';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';

import s from './LoadingScreen.module.scss';

export const LoadingScreen = () => {
  const [{ status }, toggle] = useTransition({
    timeout: 1000,
    initialEntered: true,
    unmountOnExit: true,
    preEnter: true,
  });
  useEffect(() => {
    toggle();
  }, []);

  if (status === 'unmounted') return null;

  return (
    <Box
      sx={{ width: '100%' }}
      className={cx(s.loadingScreen, {
        [s.exiting as string]: status === 'exiting',
      })}
    >
      <LinearProgress />
      <Container maxWidth="xs" sx={{ position: 'relative' }}>
        <Image
          src="/monerium-logo.png"
          alt="Monerium logo"
          fill
          style={{
            objectFit: 'contain',
            padding: '20px',
          }}
          priority
        />
      </Container>
    </Box>
  );
};
