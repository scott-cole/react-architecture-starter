import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { authService } from '@/services/authService'
import { useAuthStore } from '@/stores/authStore'
import type { ApiError } from '@/types/api'
import type { LoginCredentials, RegisterCredentials } from '@/types/auth'

export function useLogin() {
  const queryClient = useQueryClient()
  const setAuth = useAuthStore((state) => state.setAuth)

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => authService.login(credentials),
    onSuccess: (data) => {
      setAuth(data.user, data.tokens.accessToken)
      localStorage.setItem('refresh_token', data.tokens.refreshToken)
      queryClient.invalidateQueries({ queryKey: ['auth'] })
    },
  })
}

export function useRegister() {
  const queryClient = useQueryClient()
  const setAuth = useAuthStore((state) => state.setAuth)

  return useMutation({
    mutationFn: (credentials: RegisterCredentials) => authService.register(credentials),
    onSuccess: (data) => {
      setAuth(data.user, data.tokens.accessToken)
      localStorage.setItem('refresh_token', data.tokens.refreshToken)
      queryClient.invalidateQueries({ queryKey: ['auth'] })
    },
  })
}

export function useLogout() {
  const queryClient = useQueryClient()
  const logout = useAuthStore((state) => state.logout)

  return useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      logout()
      localStorage.removeItem('refresh_token')
      queryClient.clear()
    },
  })
}

export function useAuth() {
  const { user, isAuthenticated, token } = useAuthStore()
  
  const { data: currentUser, isLoading } = useQuery({
    queryKey: ['auth', 'me'],
    queryFn: () => authService.me(),
    enabled: !!token && !user,
    retry: false,
  })

  return {
    user: user || currentUser,
    isAuthenticated: isAuthenticated || (!!token && !!currentUser),
    isLoading,
  }
}

export function useRequireAuth() {
  const { user, isAuthenticated, isLoading } = useAuth()
  
  if (isLoading) {
    return { user: null, isAuthenticated: false, isLoading: true }
  }
  
  if (!isAuthenticated) {
    window.location.href = '/login'
    return { user: null, isAuthenticated: false, isLoading: false }
  }
  
  return { user, isAuthenticated: true, isLoading: false }
}
