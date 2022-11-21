import { useMutation, useQueryClient } from 'react-query'

import { deleteComment } from '@features/comments/services'

import { QueryKeys } from './constants'

export const useDeleteComment = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteComment,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [ QueryKeys.COMMENTS ] })
    },
  })
}
