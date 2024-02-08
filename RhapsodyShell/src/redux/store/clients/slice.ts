import { createSlice } from "@reduxjs/toolkit";

import { createClient, deleteClient, getAllClients } from "./actions";
import { initialState } from "./state";

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllClients.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllClients.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.clients = action.payload;
      })
      .addCase(getAllClients.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(createClient.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.clients.push(action.payload);
      })
      .addCase(deleteClient.fulfilled, (state, action) => {
        state.status = "succeeded";
        const idToDelete = action.meta.arg.id;
        state.clients = state.clients.filter(
          (client) => client.id !== idToDelete
        );
      });
  },
});

export default clientsSlice.reducer;
