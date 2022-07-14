import { CommentWithReplies } from '@types'
import { COMMENTS_SERVICES } from '@http/api'
import { httpRequest } from '@utils'

export const getComments = () => httpRequest<CommentWithReplies[]>({
  url: COMMENTS_SERVICES.COMMENTS,
})
