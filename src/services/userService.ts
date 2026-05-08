import { apiClient } from './apiClient'
import type { ApiResponse, PaginatedResponse } from '@/types/api'

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  createdAt: string
  updatedAt: string
}

export interface CreateUserDto {
  email: string
  name: string
  password: string
}

export interface UpdateUserDto {
  name?: string
  avatar?: string
}

export const userService = {
  getUsers: (params?: { page?: number; pageSize?: number }) =>
    apiClient.get<PaginatedResponse<User>>('/users', params),

  getUser: (id: string) =>
    apiClient.get<ApiResponse<User>>(`/users/${id}`),

  createUser: (data: CreateUserDto) =>
    apiClient.post<ApiResponse<User>>('/users', data),

  updateUser: (id: string, data: UpdateUserDto) =>
    apiClient.patch<ApiResponse<User>>(`/users/${id}`, data),

  deleteUser: (id: string) =>
    apiClient.delete<ApiResponse<void>>(`/users/${id}`),
}
