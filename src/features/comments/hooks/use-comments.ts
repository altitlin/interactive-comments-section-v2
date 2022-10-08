import { useQuery } from 'react-query'

import { getComments } from '@features/comments/services/get-comments'

import { QueryKeys } from './constants'

export const useComments = () => (
  useQuery([ QueryKeys.COMMENTS ], getComments)
)
