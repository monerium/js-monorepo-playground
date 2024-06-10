'use client';
import { useMonerium } from '@monerium/sdk-react-provider';
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation';
import { LoadingScreen } from '../../components/LoadingScreen';
import BottomNavigation from '../../components/Navigation/BottomNavigation';

export default function AuthorizedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthorized, loadingAuth } = useMonerium();
  const router = useRouter();

  if (loadingAuth) {
    return <LoadingScreen />;
  }

  if (!loadingAuth && !isAuthorized) {
    router.push('/');
  }

  if (isAuthorized) {
    return (
      <>
        <Box sx={{ pb: 7 }}>
          {children}
          <BottomNavigation />
        </Box>
      </>
    );
  }
  return null;
}
