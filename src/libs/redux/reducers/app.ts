import { initialState } from '../variables/initialState';

export const app = (state = initialState.app, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return { ...state, ...payload };
  }
};
