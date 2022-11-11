import { httpRequest, HTTPMethods } from '@lib/http'

import { API } from './constants'
import { Comment, CreateCommentDto } from './model'

export const getComments = () => httpRequest<Comment[]>({
  url: API.COMMENTS,
})

export const createComment = (commentDto: CreateCommentDto) => httpRequest<Comment>({
  method: HTTPMethods.POST,
  url: API.COMMENTS,
  data: commentDto,
})
