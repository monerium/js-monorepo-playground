import { ValidationErrors } from '@monerium/types/validationTypes';

export type Profile = {
  id: string;
  kind: 'personal' | 'corporate';
  name: string;
  perms: Array<'read' | 'write'>;
  createdAt: string;
  updatedAt: string;
};

export interface ReadRequest {
  id: string;
}
export interface UpdateRequest {
  id: string;
  data: Profile;
}

export type IamProfileReduxStore = {
  isListRequest: boolean;
  isListSuccess: boolean;
  isListFailure?: ValidationErrors;
  list: Profile[];
  selected?: Profile;
};
