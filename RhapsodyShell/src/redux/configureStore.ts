import { configureStore } from "@reduxjs/toolkit";
import { goodsApi } from "./query/goods/goodsApi";
import clientsSlice from "@/redux/store/clients/slice";

export const store = configureStore({
  reducer: {
    client: clientsSlice,
    [goodsApi.reducerPath]: goodsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(goodsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;