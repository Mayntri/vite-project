import { ThemeProvider } from '@mayntri/frontend-core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes'
import { NavigationScroll } from './layouts/NavigationScroll'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <NavigationScroll>
            <Routes />
          </NavigationScroll>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
