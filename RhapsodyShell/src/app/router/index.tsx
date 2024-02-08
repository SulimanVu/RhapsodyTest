import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import ErrorBoundary from "@/shared/ui/ErrorBoundary";
import { routes } from "./routes";
const Router = () => (
  <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
  </ErrorBoundary>
);

export default Router;
