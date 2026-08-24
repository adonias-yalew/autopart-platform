import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

// NOTE: This is a structural placeholder for the real auth system.
// When the backend auth service is ready, replace the state management here
// with actual API calls and token storage. The context shape stays the same.

interface AuthContextValue {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  // Development: starts unauthenticated so the login flow can be exercised.
  // The login() call here is a temporary stand-in for real credential validation.
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function login() {
    setIsAuthenticated(true)
  }

  function logout() {
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
