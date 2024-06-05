'use client';
import React, { FC, useCallback, useEffect } from 'react';
import cx from 'classnames';
// import useStyles from 'isomorphic-style-loader/useStyles';
// import history from 'src/history';
// import Link from 'components/Link/Link';
// import Stripe from 'components/Stripe';
// import { useAppSelector } from 'customer/store/configureStore';
// import CookieNotice from '../../policies/CookieNotice';
// import { setInviteCode } from '../InviteCode/service';
// import Login from './Login';
import { AuthContext } from './types';
import { useAppSelector } from '../../hooks';
import s from './LoginPage.module.css';

const LoginPage: FC<{
  redirectUri?: string;
  inviteCode?: string;
}> = ({ redirectUri = '/', inviteCode }) => {
  // useStyles(s);

  const { isConfirmSuccess } = useAppSelector(({ iam }) => ({
    isConfirmSuccess: !!iam?.confirm?.isConfirmSuccess,
  }));

  const handleLogin = useCallback(
    (ctx: AuthContext) => {
      // redirect url specified
      if (redirectUri && /^((http|https):\/\/)/.test(redirectUri)) {
        window.location.replace(redirectUri);
      } else if (redirectUri && history) {
        // history.push({ pathname: redirectUri, search: '' });
      }
      // check that the user is verified, if not the redirect to verification page
      else if (ctx?.auth && !ctx?.auth.verified && history) {
        // history.push('/confirm');
      }
    },
    [redirectUri]
  );

  useEffect(() => {
    if (inviteCode) {
      // setInviteCode(inviteCode);
    }
  }, [inviteCode]);

  return (
    <div className={cx(s.form)}>
      <h1 className={s.title} data-test-id="LoginPageTitle">
        Login
      </h1>
      {/* <Stripe /> */}
      <div className={s.instructions}>
        {isConfirmSuccess && (
          <p>
            <b>Your email has been verified</b>
          </p>
        )}
        <p>Please log in using your email and password</p>
      </div>
      {/* <Login onSuccess={handleLogin} /> */}

      <p className={s.resetPassword}>
        {/* <Link to="/reset">Forgot password?</Link> */}
      </p>
      <p className={s.resetPassword}>
        Need an account?{' '}
        {/* <Link to={inviteCode ? `/signup?invite=${inviteCode}` : '/signup'}>
          Sign up
        </Link> */}
      </p>
      {/* <CookieNotice /> */}
    </div>
  );
};

export default LoginPage;
