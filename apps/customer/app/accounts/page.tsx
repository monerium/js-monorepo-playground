import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// See dynamic metadata:
// https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata
export const metadata = {
  title: 'Accounts',
  description: 'Monerium accounts',
};

export default function Page({ params, searchParams }: Props) {
  return <p>Accounts</p>;
}
