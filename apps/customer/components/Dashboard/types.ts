import { Balances } from '@monerium/sdk';

export type ChainSelection = 'all' | 'gnosis' | 'polygon' | 'ethereum';

export interface Account extends Omit<Balances, 'balances'> {
  amount: string;
  currency: string;
}
