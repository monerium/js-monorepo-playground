import { ValidationErrors } from '@monerium/types/validationTypes';
import { Profile } from '../Profile/types';

export interface Role {
  id: string;
  name:
    | 'admin' // RoleAdmin represents a request with administrative privileges.
    | 'partner'; // RolePartner represents a request with partner privileges
  createdAt: string;
  updatedAt: string;
}

// Supported authentication methods.
export type AuthMethod = 'password' | 'resource' | 'jwt' | 'apikey' | 'bearer';

// Info contains information about how the user was authenticated.
export interface AuthInfo {
  method: AuthMethod;
  subject: string;
  verified: boolean;
  invited: boolean;
}

export interface AuthContext {
  userId: string;
  email: string;
  name: string;
  roles: Role[];
  auth: AuthInfo;
  defaultProfile: string;
  profiles: Profile[];
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LogoutResponse {
  success: boolean;
}

export interface IamLoginReduxStore {
  isLoginRequest: boolean;
  isLoginSuccess: boolean;
  isLoginFailure?: ValidationErrors;
  isLogoutRequest: boolean;
  isLogoutSuccess: boolean;
  isLogoutFailure?: ValidationErrors;
  readRequest: boolean;
  readSuccess: boolean;
  readFailure?: ValidationErrors;
  auth?: AuthContext;
}
