import { apiClient } from './apiClient'
import type { ApiResponse, AuthTokens } from '@/types/api'
import type { LoginCredentials, RegisterCredentials, User } from '@/types/auth'

export const authService = {
  login: async (credentials: LoginCredentials) => {
    const response = await apiClient.post<ApiResponse<{ user: User; tokens: AuthTokens }>>(
      '/auth/login',
      credentials
    )
    return response.data
  },

  register: async (credentials: RegisterCredentials) => {
    const response = await apiClient.post<ApiResponse<{ user: User; tokens: AuthTokens }>>(
      '/auth/register',
      credentials
    )
    return response.data
  },

  logout: async () => {
    await apiClient.post('/auth/logout')
  },

  refreshToken: async (refreshToken: string) => {
    const response = await apiClient.post<ApiResponse<AuthTokens>>('/auth/refresh', {
      refreshToken,
    })
    return response.data
  },

  me: async () => {
    const response = await apiClient.get<ApiResponse<User>>('/auth/me')
    return response.data
  },
}
