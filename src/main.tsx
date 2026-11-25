import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Auth from './pages/Auth/Auth'
import { MainLayout } from './layout/MainLayout/MainLayout'
import { Application } from './pages/Application/Application'
import { ApprovalPage } from './pages/ApprovalPage/ApprovalPage'

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
      // {
      //   path: '/employer/business-trips',
      //   element: <BusinessTrips/>
      // },
      // {
      //   path: '/employer/vacations',
      //   element: <Vacations/>
      // }
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
    <RouterProvider router={router} />
  </StrictMode>,
)