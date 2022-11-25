import { httpRequest, HTTPMethods } from '@lib/http'

import { API } from './constants'
import {
  CreateComment,
  GetComments,
  UpdateComment,
  DeleteComment
} from './types'

export const createComment: CreateComment = createCommentDto => httpRequest({
  method: HTTPMethods.POST,
  url: API.COMMENTS,
  data: createCommentDto,
})

export const getComments: GetComments = () => httpRequest({
  url: API.COMMENTS,
})

export const updateComment: UpdateComment = updateCommentDto => httpRequest({
  method: HTTPMethods.PATCH,
  // eslint-disable-next-line no-underscore-dangle
  url: `${API.COMMENTS}/${updateCommentDto._id}`,
  data: updateCommentDto,
})

export const deleteComment: DeleteComment = id => httpRequest({
  method: HTTPMethods.DELETE,
  url: `${API.COMMENTS}/${id}`,
})
