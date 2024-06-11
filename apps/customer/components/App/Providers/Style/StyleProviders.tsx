'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { Experimental_CssVarsProvider } from '@mui/material/styles';
import { AppRouterCacheProvider as MUIEmotionCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import theme from './theme';

function StyleProviders({ children }: { children: React.ReactNode }) {
  return (
    <MUIEmotionCacheProvider>
      <Experimental_CssVarsProvider theme={theme}>
        <CssBaseline />
        {children}
      </Experimental_CssVarsProvider>
    </MUIEmotionCacheProvider>
  );
}
export default StyleProviders;
