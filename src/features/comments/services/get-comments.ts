import { httpRequest } from '@lib'

import { API } from './constants'
import { Comment } from './model'

export const getComments = () => httpRequest<Comment[]>({
  url: API.GET_COMMENTS,
})
