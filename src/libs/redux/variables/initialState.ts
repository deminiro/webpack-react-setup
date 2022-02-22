import { ReduxStore } from './storeTypes';

export const initialState: ReduxStore = {
  app: {
    isInitialized: true,
    isAuth: false,
  },
};
