import Image from 'next/image';

import { Chain } from '@monerium/sdk';

const ChainIcon = ({ chain }: { chain: Chain }) => {
  return (
    <Image
      src={`/chains/${chain}-bgfill-icon.svg`}
      alt={`${chain} logo`}
      height={24}
      width={24}
    />
  );
};
export default ChainIcon;
