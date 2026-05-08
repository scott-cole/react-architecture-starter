export interface User {
  id: string
  email: string
  name: string
  role: 'user' | 'admin'
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  email: string
  password: string
  name: string
}

export interface AuthTokens {
  accessToken: string
  refreshToken: string
}
