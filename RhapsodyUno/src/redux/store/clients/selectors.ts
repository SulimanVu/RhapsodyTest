import { store } from "shell/store";

export type RootState = ReturnType<typeof store.getState>;

export const selectClients = (state: RootState) => {
  return state.clients;
};
