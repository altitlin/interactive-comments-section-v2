import React from 'react'

import { Loader, ConfirmModal } from '@components'
import { Comments, CreateComment, useComments } from '@features/comments'

export const CommentsPage = () => {
  const { isLoading, data: comments } = useComments()

  if (isLoading || !comments) return <Loader />

  return (
    <>
      <Comments
        comments={comments}
        currentUserName="juliusomo"
      />
      <CreateComment />
      <ConfirmModal title="Delete comment">
        Are you sure you want to delete this comment?
        This will remove the comment and can not be undone.
      </ConfirmModal>
    </>
  )
}
