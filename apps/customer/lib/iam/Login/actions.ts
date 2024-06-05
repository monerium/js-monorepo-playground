import { ValidationErrors } from '@monerium/types/validationTypes';
// import { alertFailure } from '../../notification/Alert/actions';
// TODO: alertFailure
import constants from './constants';
import service from './service';
import { AuthContext, LoginRequest, LogoutResponse } from './types';
import { AppThunk } from '../../store';
import AppAction from '../../actions';

const login = (param: LoginRequest) =>
  AppAction<LoginRequest, AuthContext>({
    param,
    requestConst: constants.LOGIN_REQUEST,
    successConst: constants.LOGIN_SUCCESS,
    failureConst: constants.LOGIN_FAILURE,
    service: service.login,
  });

const authContext = (): AppThunk<Promise<AuthContext>> => {
  const request = () => ({ type: constants.LOGIN_REQUEST });
  const success = (item: AuthContext) => ({
    type: constants.LOGIN_SUCCESS,
    item,
  });
  const failure = (error?: ValidationErrors) => ({
    type: constants.LOGIN_FAILURE,
    error,
  });

  return async (dispatch) => {
    dispatch(request());
    try {
      const item = await service.authContext();
      dispatch(success(item));
      return item;
    } catch (error) {
      // we handle error differently because we don't want that "not authenticated" error banner
      dispatch(failure({ auth: 'user not authenticated' }));
      throw error;
    }
  };
};

const logout = () =>
  AppAction<object, LogoutResponse>({
    param: {},
    requestConst: constants.LOGOUT_REQUEST,
    successConst: constants.LOGOUT_SUCCESS,
    failureConst: constants.LOGOUT_FAILURE,
    service: service.logout,
  });

const read = (id: string): AppThunk<Promise<AuthContext | void>> => {
  const request = () => ({ type: constants.READ_REQUEST });
  const success = (item: AuthContext) => ({
    type: constants.READ_SUCCESS,
    item,
  });
  const failure = (error?: ValidationErrors) => ({
    type: constants.READ_FAILURE,
    error,
  });

  return async (dispatch) => {
    dispatch(request());
    try {
      const item = await service.read(id);
      dispatch(success(item));
      return item;
    } catch (error) {
      // if (error) dispatch(alertFailure(<ValidationErrors>error, failure)); // TODO:
      return undefined;
    }
  };
};

const actions = {
  authContext,
  login,
  logout,
  read,
};
export default actions;
