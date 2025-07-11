import { useState, useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'
import { supabase } from '@/lib/supabase'

const ADMIN_EMAIL = 'mtahirbutt1005@gmail.com' // Fallback for initial check

export const useAdmin = () => {
  const { user } = useAuth()
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) {
        setIsAdmin(false)
        setLoading(false)
        return
      }

      try {
        // Check database for admin status
        const { data: profile, error } = await supabase
          .from('user_profiles')
          .select('is_admin')
          .eq('id', user.id)
          .single()

        if (error) {
          console.error('Error checking admin status:', error)
          // Fallback to email check if database check fails
          setIsAdmin(user.email === ADMIN_EMAIL)
        } else {
          setIsAdmin(profile?.is_admin || false)
        }
      } catch (error) {
        console.error('Error in admin check:', error)
        // Fallback to email check
        setIsAdmin(user.email === ADMIN_EMAIL)
      } finally {
        setLoading(false)
      }
    }

    checkAdminStatus()
  }, [user])
  
  return {
    isAdmin,
    loading,
    adminEmail: ADMIN_EMAIL
  }
}
