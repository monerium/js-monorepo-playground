// import rest from '@monerium/services/rest';
import { AuthContext, LoginRequest, LogoutResponse } from './types';

const authContext = (): Promise<AuthContext> => {
  return { userId: 'x' };
};
// rest.get('/api/iam/auth/context');

const login = (data: LoginRequest): Promise<AuthContext> => {
  return { userId: 'x' };
};
// rest.post('/api/iam/login', data);

const logout = (): Promise<LogoutResponse> => {
  return { success: true };
};
// rest.get('/api/iam/logout');

const read = (id: string): Promise<AuthContext> => {
  return { userId: 'x' };
};
// rest.get(`/api/iam/users/${id}`);

const service = {
  authContext,
  login,
  logout,
  read,
};
export default service;
