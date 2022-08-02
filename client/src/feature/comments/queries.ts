import { useQuery } from 'react-query'

import { getComments } from '@http/requests'

import { QueryKeys } from '../query-keys'

export const useComments = () => useQuery([ QueryKeys.COMMENTS ], getComments)
