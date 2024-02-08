import UseAppDispatch from "shell/UseAppDispatch";
import UseAppSelector from "shell/UseAppSelector";
import { createClient, getAllClients } from "./redux/store/clients/actions";
import { useEffect } from "react";

const AddUser = () => {
  const dispatch = UseAppDispatch();
  const clients = UseAppSelector((state: any) => state.client.clients);

  const handleAdd = () => {
    dispatch(createClient({ data: { name: "Suliman" } }));
  };

  useEffect(() => {
    if (!clients.length) {
      dispatch(getAllClients());
    }
  }, [dispatch, clients]);

  return (
    <div>
      <div style={{ maxWidth: "500px", marginTop: 20 }}>
        <div>app uno users:</div>
        {clients.map((client: any) => (
          <span key={client.id}>{client.name}</span>
        ))}
      </div>
      <button style={{ background: "red" }} onClick={handleAdd}>
        add user
      </button>
    </div>
  );
};

export default AddUser;
