import React from 'react'

import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalStyles from './GlobalStyles'
import Convert from './screens/Convert'
import Home from './screens/Home'
import { queryClient } from './services/queryClient'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/convert',
    element: <Convert />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
