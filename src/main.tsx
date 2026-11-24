import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Landing from './pages/Landing/Landing'
import Auth from './pages/Auth/Auth'
import { Application } from './pages/Application/Application'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Application/>
  },
  {
    path: '/auth',
    element: <Auth/>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)