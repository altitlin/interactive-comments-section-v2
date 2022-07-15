import React from 'react'

import { useComments } from '@feature'
import { Comment } from '@models'

import { CommentsView } from './comments-view'

export const Comments = () => {
  const { isLoading, data: comments } = useComments()

  if (isLoading) return <div>Loading</div>

  return (
    <CommentsView
      comments={comments as Comment[]}
      currentUserName="juliusomo"
    />
  )
}
