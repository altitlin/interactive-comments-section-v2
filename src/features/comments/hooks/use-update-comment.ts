/* eslint-disable no-underscore-dangle */
import { useMutation, useQueryClient } from 'react-query'

import { Comment, updateComment } from '@features/comments/services'

import { QueryKeys } from './constants'

export const useUpdateComment = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateComment,
    onSuccess: (data) => {
      const previousComments = queryClient.getQueryData<Comment[]>([ QueryKeys.COMMENTS ])

      if (previousComments) {
        queryClient.setQueriesData(
          [ QueryKeys.COMMENTS ],
          previousComments.map(comment => (comment._id === data._id ? data : comment))
        )
      }
    },
  })
}
