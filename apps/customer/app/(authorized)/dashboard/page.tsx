'use client';

import { useMonerium } from '@monerium/sdk-react-provider';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import TotalBalance from '../../../components/Dashboard/TotalBalance';
import ChainFilter from '../../../components/Dashboard/ChainFilter';

// import { useMonerium } from "@monerium/sdk-react-provider";

export default function Home() {
  const { balances, loadingBalances } = useMonerium();

  console.log(
    '%c balances',
    'color:white; padding: 30px; background-color: darkgreen',
    balances,
    loadingBalances,
    balances?.find((b) => b.balances.find((a) => a.currency === 'gbp'))
  );

  return (
    <Box sx={{ pt: 7 }}>
      <ChainFilter />
      <TotalBalance />

      <List>
        {balances?.map((account, i) => (
          <ListItemButton key={i + account.id}>
            {/* <p>
              Amount:{' '}
              {account.balances.find((a) => a.currency === 'eur')?.amount}
            </p>
            <p>{account.chain}</p> */}
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={'/tokens/eur.png'} />
            </ListItemAvatar>
            {/* <p>{account.address}</p> */}
            <ListItemText primary={'test'} secondary={'testing'} />
          </ListItemButton>
        ))}
      </List>
      {/* <List>
        {messages.map(({ primary, secondary, person }, index) => (
        ))}
      </List> */}
    </Box>
  );
}
