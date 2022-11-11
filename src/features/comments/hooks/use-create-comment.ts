import { useMutation, useQueryClient } from 'react-query'

import { createComment, Comment, CreateCommentDto } from '@features/comments/services'

import { QueryKeys } from './constants'

export const useCreateComment = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createComment,
    onMutate: async (createCommentDto) => {
      await queryClient.cancelQueries({ queryKey: [ QueryKeys.COMMENTS ] })

      const previousComments = queryClient.getQueryData<Comment[]>([ QueryKeys.COMMENTS ])

      queryClient.setQueryData<CreateCommentDto | Comment[] | undefined>(
        [ QueryKeys.COMMENTS ],
        old => (old ? (old as Comment[]).concat(createCommentDto as unknown as Comment) : old)
      )

      return { previousComments }
    },
    onError: (err, createCommentDto, context) => {
      if (context?.previousComments) {
        queryClient.setQueryData([ QueryKeys.COMMENTS ], context.previousComments)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [ QueryKeys.COMMENTS ] })
    },
  })
}
