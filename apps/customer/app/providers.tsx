"use client";

import * as React from "react";
import { AppRouterCacheProvider as MUIEmotionCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { Experimental_CssVarsProvider } from "@mui/material/styles";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { MoneriumProvider } from "@monerium/sdk-react-provider";
import CssBaseline from "@mui/material/CssBaseline";

import { config } from "../lib/wagmi";
import theme from "./styles/theme";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <MoneriumProvider
            clientId="f2cd22fa-2406-11ef-8cfc-fe34ee86fd51"
            redirectUrl="http://localhost:3000/accounts"
            environment="sandbox"
          >
            <MUIEmotionCacheProvider>
              <Experimental_CssVarsProvider theme={theme}>
                <CssBaseline />
                {children}
              </Experimental_CssVarsProvider>
            </MUIEmotionCacheProvider>
          </MoneriumProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
