import { COMMENTS_SERVICES } from '@http/api'
import { Comment } from '@models'
import { httpRequest } from '@utils'

export const getComments = () => httpRequest<Comment[]>({
  url: COMMENTS_SERVICES.COMMENTS,
})
