import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../src/styles/font.css'
import './styles/App.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './config/route-config'
import 'aos/dist/aos.js';
import AOS from 'aos';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}> </RouterProvider>
  </StrictMode>,
)
