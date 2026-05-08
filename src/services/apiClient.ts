import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios'
import type { ApiError } from '@/types/api'

class ApiClient {
  private client: AxiosInstance
  private baseURL: string

  constructor(baseURL: string = import.meta.env.VITE_API_URL || '/api') {
    this.baseURL = baseURL
    this.client = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    this.setupInterceptors()
  }

  private setupInterceptors(): void {
    this.client.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('auth_token')
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        const apiError: ApiError = {
          message: error.response?.data?.message || 'An error occurred',
          status: error.response?.status || 500,
          code: error.code,
        }

        if (error.response?.status === 401) {
          localStorage.removeItem('auth_token')
          window.location.href = '/login'
        }

        return Promise.reject(apiError)
      }
    )
  }

  public get<T>(url: string, params?: Record<string, unknown>) {
    return this.client.get<T>(url, { params })
  }

  public post<T>(url: string, data?: unknown) {
    return this.client.post<T>(url, data)
  }

  public put<T>(url: string, data?: unknown) {
    return this.client.put<T>(url, data)
  }

  public patch<T>(url: string, data?: unknown) {
    return this.client.patch<T>(url, data)
  }

  public delete<T>(url: string) {
    return this.client.delete<T>(url)
  }

  public getClient(): AxiosInstance {
    return this.client
  }
}

export const apiClient = new ApiClient()
export default ApiClient
