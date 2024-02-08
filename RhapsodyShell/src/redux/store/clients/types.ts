export type IClientState = {
  status: string;
  clients: IClient[];
};

export type IClient = {
  id: number;
  name: string;
};
