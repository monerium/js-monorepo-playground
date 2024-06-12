import { createContext } from 'react';

import {
  LinkAddress,
  Balances,
  NewOrder,
  Order,
  Profile,
  Token,
} from '@monerium/sdk';

export interface MoneriumContextValue {
  authorize: () => Promise<void>;
  isAuthorized: boolean;
  profile: Profile | null;
  balances: Balances[] | null;
  loading: boolean;
  loadingPlaceOrder: boolean;
  loadingLinkAddress: boolean;
  loadingBalances: boolean;
  getBalances: () => Promise<void>;
  linkAddress: (addressDetails: LinkAddress) => Promise<unknown>;
  placeOrder: (
    orderDetails: NewOrder,
    supportingDocument?: File
  ) => Promise<void>;
  orders: Order[];
  tokens: Token[];
  error: unknown;
  /** Is still checking if there is an active session */
  loadingAuth: boolean;
}

export const MoneriumContext = createContext<MoneriumContextValue | null>(null);
