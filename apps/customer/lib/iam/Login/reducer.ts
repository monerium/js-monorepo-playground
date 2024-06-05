import { AnyAction } from 'redux';
import { CONFIRM_SUCCESS } from '../Confirm/constants';
import { SIGNUP_SUCCESS } from '../Signup/constants';
import constants from './constants';
import { IamLoginReduxStore } from './types';

const initial: IamLoginReduxStore = {
  isLoginRequest: false,
  isLoginSuccess: false,
  isLoginFailure: undefined,

  isLogoutRequest: false,
  isLogoutSuccess: false,
  isLogoutFailure: undefined,

  readRequest: false,
  readSuccess: false,
  readFailure: undefined,
  auth: undefined,
};

const loginReducer = (state = initial, action: AnyAction) => {
  switch (action.type) {
    case constants.LOGIN_REQUEST: {
      return {
        ...state,
        isLoginRequest: true,
        isLoginFailure: undefined,
      };
    }
    case SIGNUP_SUCCESS:
    case CONFIRM_SUCCESS:
    case constants.LOGIN_SUCCESS: {
      const { item: authContext } = action;
      return {
        ...state,
        auth: authContext,
        isLoginRequest: false,
        isLoginSuccess: true,
        isLoginFailure: undefined,
        isLogoutSuccess: false,
      };
    }
    case constants.LOGIN_FAILURE: {
      const { error } = action;
      return {
        ...state,
        isLoginRequest: false,
        isLoginSuccess: false,
        isLoginFailure: error,
      };
    }
    case constants.LOGOUT_REQUEST: {
      return { ...state, isLogoutRequest: true, isLogoutFailure: false };
    }
    case constants.LOGOUT_SUCCESS: {
      return {
        ...state,
        auth: undefined,
        isLogoutRequest: false,
        isLogoutSuccess: true,
        isLogoutFailure: undefined,
        isLoginRequest: false,
        isLoginSuccess: false,
        isLoginFailure: undefined,
      };
    }
    case constants.LOGOUT_FAILURE: {
      const { error } = action;
      return {
        ...state,
        isLogoutRequest: false,
        isLogoutSuccess: false,
        isLogoutFailure: error,
      };
    }
    case constants.READ_REQUEST: {
      return {
        ...state,
        readRequest: true,
        readSuccess: false,
        readFailure: undefined,
      };
    }
    case constants.READ_SUCCESS: {
      const { item: user } = action;
      return {
        ...state,
        auth: {
          ...state.auth,
          auth: { ...state.auth?.auth, invited: user?.invited },
        },
        readRequest: false,
        readSuccess: true,
        readFailure: undefined,
      };
    }
    case constants.READ_FAILURE: {
      const { error } = action;
      return {
        ...state,
        readRequest: false,
        readSuccess: false,
        readFailure: error,
      };
    }
    default:
      return state;
  }
};
export default loginReducer;
