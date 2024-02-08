import { createRoot } from "react-dom/client";
import StoreProvider from "shell/storeProvider";
import App from "@/App";

const root = createRoot(document.getElementById("app-uno")!);
root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
