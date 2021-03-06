const initialState = {
  user: {},
  isLogin: false,
  isError: false,
  error: {},
};

export const authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        user: payload,
        isLogin: true,
        error: {},
        isError: false,
      };
    case 'ERROR':
      return {
        ...state,
        error: payload,
        isError: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};
