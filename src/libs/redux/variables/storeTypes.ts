export interface App {
  isInitialized: boolean;
  isAuth: boolean;
}

export interface ReduxStore {
  app: App;
}
