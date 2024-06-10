import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { memo } from 'react';
import { Currency } from '@monerium/sdk';
import { useMonerium } from '@monerium/sdk-react-provider';

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
    const { tokens } = useMonerium();

    console.log(
      '%c tokens',
      'color:white; padding: 30px; background-color: darkgreen',
      tokens
    );

    // todo add currency symbol
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
