import React from 'react'
import { useAuth } from '@/context/AuthContext'
import { useAdmin } from '@/hooks/useAdmin'
import { Link } from 'react-router-dom'

interface AdminProtectedProps {
  children: React.ReactNode
}

const AdminProtected: React.FC<AdminProtectedProps> = ({ children }) => {
  const { user, loading: authLoading } = useAuth()
  const { isAdmin, loading: adminLoading } = useAdmin()

  const loading = authLoading || adminLoading

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Verifying admin access...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="container py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
        <p className="mb-4">You need to be logged in to access this page.</p>
        <Link to="/login" className="text-primary hover:underline">
          Please login here
        </Link>
      </div>
    )
  }

  if (!isAdmin) {
    return (
      <div className="container py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Admin Access Required</h2>
        <p className="mb-4">You don't have permission to access this page.</p>
        <p className="text-sm text-muted-foreground mb-4">
          Only authorized administrators can manage products.
        </p>
        <Link to="/" className="text-primary hover:underline">
          Go back to home
        </Link>
      </div>
    )
  }

  return <>{children}</>
}

export default AdminProtected
