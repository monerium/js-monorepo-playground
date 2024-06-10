import Image from 'next/image';

const ChainIcon = ({ chain }) => {
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
