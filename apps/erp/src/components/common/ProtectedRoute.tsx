import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/app/providers/AuthContext'

/**
 * Wraps protected routes. Redirects to /login if not authenticated.
 * When real auth is integrated, this will also handle token refresh/expiry.
 */
export function ProtectedRoute() {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
