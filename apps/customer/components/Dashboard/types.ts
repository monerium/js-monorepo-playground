import { Balances, Chain } from '@monerium/sdk';

export type ChainSelection = 'all' | Chain;

export interface Account extends Omit<Balances, 'balances'> {
  amount: string;
  currency: string;
}
