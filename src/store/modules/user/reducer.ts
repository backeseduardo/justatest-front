const DEFAULT_STATE = {
  loading: false,
  profile: null,
};

export default function user(
  state: { loading: boolean; profile: string | null } = DEFAULT_STATE,
  action: any,
) {
  switch (action.type) {
    case '@auth/LOGIN_SUCCESS':
      return {
        loading: false,
        profile: action.payload.user,
      };

    case '@user/UPDATE_PROFILE_LOADING':
      return {
        loading: action.payload.loading,
        profile: state.profile,
      };

    case '@user/UPDATE_PROFILE_SUCCESS':
      return {
        loading: false,
        profile: action.payload.user,
      };

    case '@user/UPDATE_PROFILE_FAILURE':
      return {
        loading: false,
        profile: state.profile,
      };

    default:
      return state;
  }
}
