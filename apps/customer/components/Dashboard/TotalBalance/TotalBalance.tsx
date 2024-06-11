import { memo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Currency } from '@monerium/sdk';

function amountFormat(amount: number, currencyCode: Currency) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(amount);
}

const TotalBalance = memo(
  ({
    totalBalance,
    currency,
  }: {
    totalBalance: number;
    currency: Currency;
  }) => {
    return (
      <Card sx={{ m: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ pb: 1 }}>
            Total balance
          </Typography>
          <Typography variant="h1">
            {amountFormat(totalBalance, currency)}
          </Typography>
        </CardContent>
      </Card>
    );
  }
);
export default TotalBalance;
