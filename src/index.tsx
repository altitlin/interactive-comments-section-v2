/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { RouterConfig } from '@routes'

import { App } from './App'

import '@styles/main.scss';

const queryClient = new QueryClient()

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App>
        <RouterConfig />
      </App>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </BrowserRouter>
)
