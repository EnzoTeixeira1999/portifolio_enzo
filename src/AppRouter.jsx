import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const PublicHome = lazy(() => import('./pages/PublicHome'))
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'))
const ProjectDemo = lazy(() => import('./pages/ProjectDemo'))
const AdminLogin = lazy(() => import('./pages/AdminLogin'))
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'))
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'))

function RouteLoading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-cyan-400/20 border-t-cyan-300" />

        <p className="mt-5 text-xs uppercase tracking-[0.3em] text-cyan-300/70">
          Carregando
        </p>
      </div>
    </main>
  )
}

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

function AppRouter() {
  return (
    <Suspense fallback={<RouteLoading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default AppRouter