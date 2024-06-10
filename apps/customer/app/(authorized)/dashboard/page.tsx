'use client';

import Box from '@mui/material/Box';
import TotalBalance from '../../../components/Dashboard/TotalBalance';
import { useState } from 'react';
import { ChainSelection } from '../../../components/Dashboard/types';
import { Currency } from '@monerium/sdk';
import WalletList from '../../../components/Dashboard/WalletList';
import Stack from '@mui/material/Stack';
import ChainFilter from '../../../components/Dashboard/Filters/ChainFilter';
import TokenFilter from '../../../components/Dashboard/Filters/TokenFilter';
// import { ConnectButton } from '@rainbow-me/rainbowkit';

function Dashboard() {
  const [selectedChain, setSelectedChain] = useState<ChainSelection>('all');
  const [totalBalance, setTotalBalance] = useState<number>(0.0);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
    Currency.eur
  );

  return (
    <Box sx={{ pt: 7 }}>
      <Stack direction="row" sx={{ p: 3 }}>
        <ChainFilter selected={selectedChain} setSelected={setSelectedChain} />
        <TokenFilter
          selected={selectedCurrency}
          setSelected={setSelectedCurrency}
        />
        {/* <div style={{ marginLeft: '8px' }}>
          <ConnectButton chainStatus={'none'} showBalance={false} />
        </div> */}
      </Stack>
      <TotalBalance totalBalance={totalBalance} currency={selectedCurrency} />

      <WalletList
        setTotalBalance={setTotalBalance}
        selectedChain={selectedChain}
        selectedCurrency={selectedCurrency}
      />
    </Box>
  );
}
export default Dashboard;
