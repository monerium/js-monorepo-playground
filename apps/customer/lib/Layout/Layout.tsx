'use client';
import React, { FC, useEffect, useState } from 'react';
import { animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import cx from 'classnames';
// import type { ReduxStore } from 'src/customer/types';
// import AppContext from 'customer/context';
// import ConfirmPage from '../iam/Confirm/ConfirmPage';
import actions from '../iam/Login/actions';
import LoginPage from '../iam/Login/LoginPage';
import { AuthContext } from '../iam/Login/types';
// import Notifier from '../notification/Alert/Notifier/Notifier';
// import Header from './Header';
// import Sidebar from './Sidebar/Sidebar';
import s from './Layout.module.css';
import useLogin from '../iam/Login/hooks';

/**
 * Determines if the login or confirmation screens should be shown
 */
export const getShow = ({
  authContext,
  isProtected,
  isLoginRequest,
  isLoginSuccess,
  isLoginFailure,
}: {
  authContext?: AuthContext;
  isProtected?: boolean;
  isLoginRequest?: boolean;
  isLoginSuccess?: boolean;
  isLoginFailure?: boolean;
}) => {
  const ret: {
    showLogin?: boolean;
    showConfirm?: boolean;
  } = {
    showLogin: undefined,
    showConfirm: undefined,
  };

  if (isLoginRequest) return ret;

  if (isProtected && (isLoginSuccess || isLoginFailure)) {
    if (!authContext) {
      ret.showLogin = true;
      ret.showConfirm = false;
    } else if (!authContext.auth?.verified) {
      ret.showLogin = false;
      ret.showConfirm = true;
    } else {
      ret.showLogin = false;
      ret.showConfirm = false;
    }
  } else {
    ret.showLogin = false;
    ret.showConfirm = false;
  }

  return ret;
};

const Layout: FC<{
  isProtected?: boolean;
}> = ({ isProtected, children }) => {
  // const { pathname } = useContext(AppContext);
  const pathname = 'test';
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const {
    authContext,
    isLoginRequest,
    isLoginSuccess,
    isLoginFailure,
    isVerified,
  } = useLogin();

  const bind = useDrag(({ swipe }) => {
    if (swipe[0] < 0) setShowSidebar(false); // swipe left
  });

  useEffect(() => {
    if (!authContext && !isLoginRequest) {
      actions.authContext();
      // actions.authContext.catch(() => {
      //   // not authenticated
      // });
    }
  }, [isProtected]);

  useEffect(() => {
    const v = getShow({
      authContext,
      isProtected,
      isLoginRequest,
      isLoginSuccess,
      isLoginFailure: !!isLoginFailure,
    });
    if (v.showLogin !== undefined && v.showLogin !== showLogin)
      setShowLogin(v.showLogin);
    if (v.showConfirm !== undefined && v.showConfirm !== showConfirm)
      setShowConfirm(v.showConfirm);
  }, [isProtected, authContext, pathname, isLoginSuccess, isLoginFailure]);

  return (
    <div className={s.root}>
      <nav className={s.sidebar}>
        {/* <Sidebar isVerified={isVerified} setShowSidebar={setShowSidebar} /> */}
        <p> Sidebar</p>
      </nav>
      <div className={s.container}>
        {/* <Header setShowSidebar={setShowSidebar} /> */}
        <p>Header</p>
        <div className={cx('container', s.contentContainer)}>
          {showLogin && <LoginPage redirectUri="" />}
          {showConfirm && <div>ConfirmPage TODO</div>}
          {/* {showConfirm && <ConfirmPage redirect={false} />} */}
          {((isProtected && isVerified) || !isProtected) &&
            !showLogin &&
            !showConfirm &&
            children}
        </div>
      </div>
      <button
        type="button"
        className={cx('btn-reset', s.overlay, {
          [s.overlayActive]: showSidebar,
        })}
        onClick={() => {
          setShowSidebar(false);
        }}
        aria-label="close sidebar"
      />
      <animated.nav
        {...bind()}
        className={cx(s.sidebarFixed, {
          [s.sidebarActive]: showSidebar,
        })}
      >
        <div className={s.sidebarFixedContainer}>
          {/* <Sidebar isVerified={isVerified} setShowSidebar={setShowSidebar} /> */}
          <p>Sidebar 2</p>
          <button
            type="button"
            className={s.closeSidebarBtn}
            onClick={() => {
              setShowSidebar(false);
            }}
          >
            <span className="material-icons">close</span>
          </button>
        </div>
      </animated.nav>
      {/* <Notifier /> */}
    </div>
  );
};

export default Layout;
