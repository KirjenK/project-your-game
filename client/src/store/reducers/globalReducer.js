/* eslint-disable import/prefer-default-export */
export const globalReducer = (state = { loading: true }, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_LOADING':
      return { ...state, loading: payload };

    default:
      return state;
  }
};
