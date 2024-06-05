// import { alertFailure } from 'customer/components/notification/Alert/actions';
import { ValidationErrors } from '@monerium/types/validationTypes';
import { AppThunk } from './store';

// TODO: alertFailure

export default function AppAction<Param, ResponseType>(props: {
  param: Param;
  service: (p: Param) => Promise<ResponseType>;
  successConst: string;
  requestConst: string;
  failureConst: string;
}): AppThunk<Promise<ResponseType | void>> {
  const request = () => ({ type: props.requestConst, payload: props.param });
  const success = (item: ResponseType) => ({
    type: props.successConst,
    payload: props.param,
    item,
  });
  const failure = (error?: ValidationErrors) => ({
    type: props.failureConst,
    payload: props.param,
    error,
  });

  return async (dispatch) => {
    dispatch(request());
    try {
      const item = await props.service(props.param);
      dispatch(success(item));
      return item;
    } catch (error) {
      // dispatch(alertFailure(error, failure));
      console.error(error);
    }
    return undefined;
  };
}
