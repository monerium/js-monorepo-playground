import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const TotalBalance = ({ totalBalance, currency }) => {
  return (
    <Card sx={{ m: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ pb: 1 }}>
          Total balance
        </Typography>
        <Typography variant="h1">$ 0.00</Typography>
      </CardContent>
    </Card>
  );
};
export default TotalBalance;
