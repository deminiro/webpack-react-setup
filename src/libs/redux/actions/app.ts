import { actionTypes } from '../variables/actionsTypes';

import { App } from '../variables/storeTypes';

export const setKeycloakRedirectURI = (
  isAuth: boolean
): { type: string; payload: Partial<App> } => ({
  type: actionTypes.app.TOGGLE_AUTH,
  payload: { isAuth, isInitialized: true },
});
