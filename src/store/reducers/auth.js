const initialState = {
  user: {},
};

export const authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        user: payload,
      };
  }
};
