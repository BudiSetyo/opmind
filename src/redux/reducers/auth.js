const initialState = () => ({
  user: {},
  isLogin: false,
});

export const authReducer = (state = initialState(), {type, payload}) => {
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        user: payload,
        isLogin: true,
      };
    default:
      return state;
  }
};
