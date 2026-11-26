import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Landing } from './pages/Landing/Landing'
import { Auth } from './pages/Auth/Auth'
import { MainLayout } from './layout/MainLayout/MainLayout'
import { Application } from './pages/Application/Application'
import { ApprovalPage } from './pages/ApprovalPage/ApprovalPage'
import { Vacations } from './pages/Vacations/Vacations'
import { AuthProvider } from './context/AuthContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>
  },
  {
    path: '/auth',
    element: <Auth/>
  },
  {
    element: <MainLayout/>,
    children: [
      {
        path: '/employee/application',
        element: <Application/>
      },
      // {
      //   path: '/employee/history',
      //   element: <History/>
      // },
      // {
      //   path: '/employee/notification',
      //   element: <Notification/>
      // },
      {
        path: '/employer/business-trips',
        element: <Vacations type="trip"/>
      },
      {
        path: '/employer/vacations',
        element: <Vacations type="vacation"/>
      }
    ]
  },
  // {
  //   path: '/create-application',
  //   element: <CreateApplication/>
  // },
  // {
  //   path: '/employee/application/:id',
  //   element: <ApplicationInfo/>
  // },
  {
    path: '/employer/application/:id',
    element: <ApprovalPage/>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)