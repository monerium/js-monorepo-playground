import LoginPage from '../../lib/iam/Login/LoginPage';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// See dynamic metadata:
// https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata
export const metadata = {
  title: 'Login',
  description: 'Login to Monerium',
};

// export default function Page({ params, searchParams }: Props) {
//   return <p>Login</p>;
// }

/**
 *
 * PROTECTED ????
 */

const Login = ({ params, searchParams }: Props) => {
  // const router = useRouter();
  // const { redirect_uri: redirectUri, invite: inviteCode } = router.query;
  const { redirect_uri: redirectUri, invite: inviteCode } = searchParams;

  return (
    <LoginPage redirectUri={redirectUri} inviteCode={inviteCode} />
    // <>
    //   <p>{redirectUri}</p>
    //   <p>{inviteCode}</p>
    // </>
  );
};

export default Login;
