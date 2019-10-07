import { toast } from 'react-toastify';

// import api from '../../../services/api';
import history from '../../../services/history';

const api: any = {};

export function loginLoading(loading: boolean) {
  return {
    type: '@auth/LOGIN_LOADING',
    payload: {
      loading,
    },
  };
}

export function loginSuccess(
  user: { email: string; password: string },
  token: string,
) {
  return {
    type: '@auth/LOGIN_SUCCESS',
    payload: {
      user,
      token,
    },
  };
}

export function loginFailure() {
  return {
    type: '@auth/LOGIN_FAILURE',
  };
}

export function logout() {
  return {
    type: '@auth/LOGOUT',
  };
}

export function loginRequest(email: string, password: string) {
  return async (dispatch: any) => {
    dispatch(loginLoading(true));

    try {
      const response = await api.post('/sessions', {
        email,
        password,
      });

      const { user, token } = response.data;

      api.defaults.headers.Authorization = `Bearer ${token}`;

      dispatch(loginSuccess(user, token));

      history.push('/dashboard');
    } catch (err) {
      dispatch(loginFailure());

      toast.error('Access denied, check your e-mail and password.');
    }
  };
}
