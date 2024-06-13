import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import { MoneriumConnect } from 'components/MoneriumConnect/MoneriumConnect';

import s from './page.module.scss';

const loladsd = ''

export default function Home() {
  return (
    <Container component="main" maxWidth="md">
      <Paper></Paper>
      <Box className={s.logoWrapper}>
        <Image
          className={s.logo}
          src="/monerium-logo.png"
          alt="Monerium logo"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </Box>
      <Typography variant="h1" sx={{ paddingBottom: 2 }}>
        Onchain fiat infrastructure for builders and businesses
      </Typography>
      <Typography variant="h3">
        Transfer regular money directly between offchain banks and web3 easily
        and instantly. All onchain fiat minted through Monerium is fully
        authorized, fully regulated, and fully backed.
      </Typography>
      <MoneriumConnect />
    </Container>
  );
}
