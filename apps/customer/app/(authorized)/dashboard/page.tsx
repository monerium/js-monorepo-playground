'use client';

import { useMonerium } from '@monerium/sdk-react-provider';
import Box from '@mui/material/Box';
import TotalBalance from '../../../components/Dashboard/TotalBalance';
import Filter from '../../../components/Dashboard/Filters';
import { useCallback, useEffect, useState } from 'react';
import { Account, ChainSelection } from '../../../components/Dashboard/types';
import { Balances, Currency } from '@monerium/sdk';
import WalletList from '../../../components/Dashboard/WalletList';
import { flattenSortAndSumBalances } from '../../../components/Dashboard/WalletList/utils';
import Stack from '@mui/material/Stack';
import ChainFilter from '../../../components/Dashboard/Filters/ChainFilter';
import CurrencyFilter from '../../../components/Dashboard/Filters/CurrencyFilter';

function Dashboard() {
  const { balances, loadingBalances } = useMonerium();
  const [selectedChain, setSelectedChain] = useState<ChainSelection>('all');
  const [filteredList, setFilteredList] = useState<Account[]>();
  const [totalBalance, setTotalBalance] = useState<number>(0.0);

  const [selectedCurrency, setSelectedCurrency] = useState('eur');

  console.log(
    '%c selectedCurrency',
    'color:white; padding: 30px; background-color: darkgreen',
    selectedCurrency
  );

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
    <Box sx={{ pt: 7 }}>
      <Stack direction="row" sx={{ p: 3 }}>
        <ChainFilter selected={selectedChain} setSelected={setSelectedChain} />
        <CurrencyFilter
          selected={selectedCurrency}
          setSelected={setSelectedCurrency}
        />
      </Stack>
      <TotalBalance totalBalance={totalBalance} currency={selectedCurrency} />

      <WalletList list={filteredList} />
    </Box>
  );
}
export default Dashboard;
