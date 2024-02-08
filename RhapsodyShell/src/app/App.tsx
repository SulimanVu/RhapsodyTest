import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";
import Header from "@/widgets/Header";
import { useAuth } from "@/features/auth/api";
import Router from "@/app/router";
import StoreProvider from "./provider/storeProvider";
const queryClient = new QueryClient();

const App = () => {
  const { user, loading } = useAuth();

  if (loading) return <CircularProgress />;

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Header />
        <Router />
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
