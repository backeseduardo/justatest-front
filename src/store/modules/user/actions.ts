import { toast } from 'react-toastify';

// import api from '../../../services/api';
const api: any = {};

export function updateProfileLoading(loading: boolean) {
  return {
    type: '@user/UPDATE_PROFILE_LOADING',
    payload: {
      loading,
    },
  };
}

export function updateProfileSuccess(user: {
  email: string;
  password: string;
}) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: {
      user,
    },
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}

export function updateProfileRequest(data: any) {
  return async (dispatch: any) => {
    dispatch(updateProfileLoading(true));

    try {
      const { name, email, state, avatarId, ...rest } = data;

      const profile = Object.assign(
        {
          name,
          email,
          state,
          avatar_id: avatarId,
        },
        rest.oldPassword ? rest : {},
      );

      const response = await api.put('/users', profile);

      dispatch(updateProfileSuccess(response.data));

      toast.success('Your information has been updated.');
    } catch (err) {
      dispatch(updateProfileFailure());

      toast.error('Error, check your data in the form.');
    }
  };
}
