import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "shared/lib";
import { IClient } from "./types";

export const getAllClients = createAsyncThunk(
  "clients/getAllClients",
  async () => {
    return (await instance.get<IClient[]>(`/clients`)).data;
  }
);

export const getClientById = createAsyncThunk(
  "clients/getClientById",
  async ({ id }: { id: number }) => {
    return (await instance.get<IClient>(`/clients/${id}`)).data;
  }
);

export const deleteClient = createAsyncThunk(
  "clients/deleteClient",
  async ({ id }: { id: number }) => {
    await instance.delete<IClient>(`/clients/${id}`);
  }
);

export const createClient = createAsyncThunk(
  "clients/createClient",
  async ({ data }: { data: IClient }) => {
    return (await instance.post<IClient>(`/clients`, data)).data;
  }
);
