import React from 'react'

import { useComments } from '@feature'
import { CommentWithReplies } from '@types'

import { CommentsView } from './comments-view'

export const Comments = () => {
  const { isLoading, data: comments } = useComments()

  if (isLoading) return <div>Loading</div>

  return (
    <CommentsView
      comments={comments as CommentWithReplies[]}
      currentUserName="juliusomo"
    />
  )
}
