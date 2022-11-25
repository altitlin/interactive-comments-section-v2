import { useMutation, useQueryClient } from 'react-query'
import { v4 } from 'uuid'

import { createComment, Comment } from '@features/comments/services'

import { QueryKeys } from './constants'

export const useCreateComment = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createComment,
    onMutate: async (createCommentDto) => {
      await queryClient.cancelQueries([ QueryKeys.COMMENTS ])

      const previousComments = queryClient.getQueryData<Comment[]>([ QueryKeys.COMMENTS ])

      if (previousComments) {
        queryClient.setQueriesData([ QueryKeys.COMMENTS ], [
          ...previousComments,
          {
            ...createCommentDto,
            _id: v4(),
          },
        ])
      }

      return { previousComments }
    },
    onError: (err, createCommentDto, context) => {
      if (context?.previousComments) {
        queryClient.setQueryData([ QueryKeys.COMMENTS ], context.previousComments)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries([ QueryKeys.COMMENTS ])
    },
  })
}
