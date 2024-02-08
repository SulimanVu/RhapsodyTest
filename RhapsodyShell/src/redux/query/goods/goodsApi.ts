import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IGood {
  id: number;
  name: string;
}

export const goodsApi = createApi({
  reducerPath: "goodsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8084/" }),
  endpoints: (build) => ({
    getGoods: build.query({
      query: () => `/goods`,
    }),
  }),
});

export const { useGetGoodsQuery } = goodsApi;
