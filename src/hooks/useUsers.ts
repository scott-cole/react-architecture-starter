import { useQueryClient } from '@tanstack/react-query'
import { userService } from '@/services/userService'
import { useApiQuery, useApiMutation } from './useApi'

export function useUsers(params?: { page?: number; pageSize?: number }) {
  return useApiQuery(
    ['users', params],
    () => userService.getUsers(params).then((res) => res.data),
    {
      keepPreviousData: true,
    }
  )
}

export function useUser(id: string) {
  return useApiQuery(
    ['user', id],
    () => userService.getUser(id).then((res) => res.data),
    {
      enabled: !!id,
    }
  )
}

export function useCreateUser() {
  const queryClient = useQueryClient()
  
  return useApiMutation(
    (data: Parameters<typeof userService.createUser>[0]) =>
      userService.createUser(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['users'] })
      },
    }
  )
}

export function useUpdateUser() {
  const queryClient = useQueryClient()
  
  return useApiMutation(
    ({ id, data }: { id: string; data: Parameters<typeof userService.updateUser>[1] }) =>
      userService.updateUser(id, data),
    {
      onSuccess: (_, variables) => {
        queryClient.invalidateQueries({ queryKey: ['user', variables.id] })
        queryClient.invalidateQueries({ queryKey: ['users'] })
      },
    }
  )
}

export function useDeleteUser() {
  const queryClient = useQueryClient()
  
  return useApiMutation(
    (id: string) => userService.deleteUser(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['users'] })
      },
    }
  )
}
