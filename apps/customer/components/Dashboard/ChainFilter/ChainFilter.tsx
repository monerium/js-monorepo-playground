import Button from '@mui/material/Button';
import { useState } from 'react';
import s from './ChainFilter.module.scss';
import Stack from '@mui/material/Stack';

const ChainFilter = () => {
  const [selected, setSelected] = useState('all');

  return (
    <Stack direction="row" spacing={1} sx={{ p: 3 }}>
      <Button variant="plain" color="secondary" disabled={selected === 'all'}>
        All chains
      </Button>
      <Button variant="plain">Gnosis</Button>
      <Button variant="plain">Polygon</Button>
      <Button variant="plain">Ethereum</Button>
    </Stack>
  );
};
export default ChainFilter;
