import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import PublicHome from './pages/PublicHome'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import ProjectDetails from './pages/ProjectDetails'
import ProjectDemo from './pages/ProjectDemo'
import ProtectedRoute from './components/ProtectedRoute'

const router = createBrowserRouter([
  {
  path: '/',
  element: <PublicHome />,
  },
  {
  path: '/:lang',
  element: <PublicHome />,
  },
  {
  path: '/:lang/project/:slug',
  element: <ProjectDetails />,
  },
  {
  path: '/:lang/demo/:slug',
  element: <ProjectDemo />,
  },
  {
    path: '/admin',
    element: <AdminLogin />,
  },
  {
    path: '/admin/dashboard',
    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)