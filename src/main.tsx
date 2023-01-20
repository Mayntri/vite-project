import { ThemeProvider } from "@mayntri/frontend-core";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Routes } from "./routes";
import { NavigationScroll } from "./layouts/NavigationScroll";

const queryClient = new QueryClient();

const isHostedOnGithubPages = location.host !== "mayntri.github.io";

const RouterType = ({ children }: { children: React.ReactNode }) => {
  return isHostedOnGithubPages ? (
    <HashRouter>{children}</HashRouter>
  ) : (
    <BrowserRouter>{children}</BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterType>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <NavigationScroll>
            <Routes />
          </NavigationScroll>
        </ThemeProvider>
      </QueryClientProvider>
    </RouterType>
  </React.StrictMode>
);
