import React from 'react'

import { Loader } from '@components'
import { Comments, CreateComment, useComments } from '@features/comments'

export const CommentsPage = () => {
  const { isLoading, data: comments } = useComments()

  if (isLoading || !comments) return <Loader />

  return (
    <>
      <Comments
        comments={comments}
        currentUserName='juliusomo'
      />
      <CreateComment />
    </>
  )
}
