import React, { FC, useState, useCallback } from 'react'

import { useConfirmModalUpdater } from '@context'
import { User } from '@features/user'
import { useDeleteComment } from '@features/comments/hooks/use-delete-comment'
import { Comment } from '@features/comments/services/model'

import { CommentsView } from './comments-view'

type CommentsProps = {
  comments: Comment[]
  currentUserName: User['username']
}

export const Comments: FC<CommentsProps> = ({
  comments,
  currentUserName,
}) => {
  const { showConfirmModal } = useConfirmModalUpdater()
  const { mutate } = useDeleteComment()

  const [ editableCommentId, setEditableCommentId ] = useState('')

  const onDelete = useCallback((id: Comment['_id']) => async () => {
    try {
      const isConfirmed = await showConfirmModal()

      if (isConfirmed) {
        mutate(id)
      }
    } catch (error) {
      // TODO: should be implemented logic handling error
    }
  }, [ showConfirmModal, mutate ])

  const resetEditableCommentId = useCallback(() => setEditableCommentId(''), [])

  return (
    <CommentsView
      comments={comments}
      currentUserName={currentUserName}
      editableCommentId={editableCommentId}
      onDelete={onDelete}
      setEditableCommentId={setEditableCommentId}
      resetEditableCommentId={resetEditableCommentId}
    />
  )
}
