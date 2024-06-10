import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { memo } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { ListItemText } from '@mui/material';
import { Account } from '../types';

const WalletList = memo(({ list }: { list?: Account[] }) => {
  return (
    <Card sx={{ m: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ pb: 1 }}>
          Wallets
        </Typography>
        <List>
          {list?.map((account, i) => (
            <ListItemButton key={i + account.id}>
              <ListItemAvatar>
                <Avatar
                  alt="Currency"
                  src={`/tokens/${account.currency}.png`}
                />
              </ListItemAvatar>
              <ListItemText primary={account.address} secondary={'testing'} />
              <p>
                {account.amount} {account.currency}
              </p>
            </ListItemButton>
          )) || <Typography variant="body1">No wallets found.</Typography>}
        </List>
      </CardContent>
    </Card>
  );
});
export default WalletList;
