import { useCallback } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
// import { ReduxStore, useAppDispatch } from 'src/customer/store/configureStore';
import { ValidationErrors } from '@monerium/types/validationTypes';
import actions from './actions';
import { AuthContext, LoginRequest } from './types';
import { useAppDispatch, useAppSelector } from '../../hooks';

interface UseLoginReturn {
  authContext?: AuthContext;
  isInvited: boolean;
  isLoginRequest: boolean;
  isLoginSuccess: boolean;
  isLoginFailure: ValidationErrors | undefined;
  isVerified: boolean;
  email: string | undefined;
  login: (data: LoginRequest) => Promise<AuthContext | void>;
  read: (userId: string) => Promise<AuthContext | void>;
}

const selectAuthUser = (state) => state.iam?.login?.auth;
const selectAuthContext = (state) => state.iam?.login;
const selectIsLoginRequest = () =>
  useAppSelector((state) => !!state.iam?.login?.isLoginRequest, shallowEqual);
const selectIsLoginSuccess = () =>
  useAppSelector((state) => !!state.iam?.login?.isLoginSuccess, shallowEqual);
const selectIsLoginFailure = () =>
  useAppSelector((state) => state.iam?.login?.isLoginFailure, shallowEqual);
const selectLoginEmail = () =>
  useAppSelector((state) => state.iam?.login?.auth?.email, shallowEqual);

const authSelector = createSelector(
  selectAuthUser,
  (authContext) => authContext?.auth
);

const authContextSelector = createSelector(
  selectAuthContext,
  (ctx) => ctx.auth
);

const useLogin = (): UseLoginReturn => {
  const dispatch = useAppDispatch();
  const auth = useSelector(authSelector, shallowEqual);
  const isLoginRequest = selectIsLoginRequest();
  const isLoginSuccess = selectIsLoginSuccess();
  const isLoginFailure = selectIsLoginFailure();
  const email = selectLoginEmail();

  return {
    authContext: useSelector(authContextSelector, shallowEqual),
    isVerified: !!auth?.verified,
    isInvited: !!auth?.invited,
    isLoginRequest,
    isLoginSuccess,
    isLoginFailure,
    email,
    login: useCallback(
      (data: LoginRequest) => dispatch(actions.login(data)),
      [dispatch]
    ),
    read: useCallback(
      (userId: string) => dispatch(actions.read(userId)).catch(console.error),
      [dispatch]
    ),
  };
};

export default useLogin;
