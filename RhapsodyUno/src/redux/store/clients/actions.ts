import { IClient, PatchClientType, PostClientType } from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@/lib";

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

export const patchClient = createAsyncThunk(
  "clients/patchClient",
  async ({ id, data }: { id: number; data: PatchClientType }) => {
    return (await instance.patch<IClient>(`/clients/${id}`, data)).data;
  }
);

export const createClient = createAsyncThunk(
  "clients/createClient",
  async ({ data }: { data: Partial<PostClientType> }) => {
    return (await instance.post<IClient>(`/clients`, data)).data;
  }
);
