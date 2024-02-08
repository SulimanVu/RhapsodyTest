import { store } from "@/redux";
import { Provider } from "react-redux";

interface StoreProviderProps {
  children: React.ReactNode;
}
const StoreProvider = ({ children }: StoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
