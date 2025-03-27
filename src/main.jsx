import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/App.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './config/route-config'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}> </RouterProvider>
  </StrictMode>,
)
