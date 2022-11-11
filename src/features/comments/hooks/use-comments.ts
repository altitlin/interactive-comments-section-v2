import { useQuery } from 'react-query'

import { getComments } from '@features/comments/services'

import { QueryKeys } from './constants'

export const useComments = () => (
  useQuery({
    queryKey: [ QueryKeys.COMMENTS ],
    queryFn: getComments,
  })
)
