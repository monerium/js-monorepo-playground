"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { MoneriumProvider } from "@monerium/sdk-react-provider";

import { config } from "../lib/wagmi";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <MoneriumProvider
            clientId="f2cd22fa-2406-11ef-8cfc-fe34ee86fd51"
            redirectUrl="http://localhost:3000"
            environment="sandbox"
          >
            {children}
          </MoneriumProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
