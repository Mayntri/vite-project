import { ThemeProvider } from "@mayntri/frontend-core";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { NavigationScroll } from "./layouts/NavigationScroll";

const queryClient = new QueryClient();

const isHostedOnGithubPages = location.host === "github.io";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={isHostedOnGithubPages ? "/vite-project" : ""}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <NavigationScroll>
            <Routes />
          </NavigationScroll>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
