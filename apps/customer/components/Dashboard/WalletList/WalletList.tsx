import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {
  Dispatch,
  SetStateAction,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { ListItemText } from '@mui/material';
import { Account, ChainSelection } from '../types';
import { useMonerium } from '@monerium/sdk-react-provider';
import { Balances, Currency } from '@monerium/sdk';
import { flattenSortAndSumBalances } from './utils';

const WalletList = memo(
  ({
    selectedChain,
    selectedCurrency,
    setTotalBalance,
  }: {
    selectedChain: ChainSelection;
    selectedCurrency: Currency;
    setTotalBalance: Dispatch<SetStateAction<number>>;
  }) => {
    const [filteredList, setFilteredList] = useState<Account[]>();
    const { balances, loadingBalances } = useMonerium();

    const handleBalanceFiltering = useCallback(() => {
      let filtered: Balances[] | null = balances;

      if (!filtered) return;
      if (selectedChain !== 'all') {
        filtered = filtered?.filter((b) => b.chain === selectedChain);
      }

      let { list, sum } = flattenSortAndSumBalances(filtered, selectedCurrency);

      setFilteredList(list);
      setTotalBalance(sum);
    }, [selectedChain, balances, selectedCurrency]);

    useEffect(() => {
      handleBalanceFiltering();
    }, [selectedChain, selectedCurrency, balances]);

    return (
      <Card sx={{ m: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ pb: 1 }}>
            Wallets
          </Typography>
          <List>
            {loadingBalances ? (
              <Typography variant="body1">Loading...</Typography>
            ) : (
              <>
                {filteredList?.map((account, i) => (
                  <ListItemButton key={i + account.id}>
                    <ListItemAvatar>
                      <Avatar
                        alt="Currency"
                        src={`/tokens/${account.currency}.png`}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={account.address}
                      secondary={'testing'}
                    />
                    <p>
                      {account.amount} {account.currency}
                    </p>
                  </ListItemButton>
                ))}
              </>
            )}
            {!loadingBalances && balances?.length === 0 && (
              <Typography variant="body1">No wallets found.</Typography>
            )}
          </List>
        </CardContent>
      </Card>
    );
  }
);
export default WalletList;
