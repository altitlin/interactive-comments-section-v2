import React, { FC, useCallback } from 'react'

import { Comment } from '@features/comments/services/model'
import { useDeleteComment } from '@features/comments/hooks/use-delete-comment'
import { useConfirmModalUpdater } from '@context'

import { CommentControlsView } from './comment-controls-view'

type CommentControlsProps = {
  id: Comment['_id']
  isOwner: boolean
}

export const CommentControls: FC<CommentControlsProps> = ({
  id,
  isOwner,
}) => {
  const { showConfirmModal } = useConfirmModalUpdater()
  const { mutate } = useDeleteComment()

  const onDelete = useCallback(async () => {
    try {
      const isConfirmed = await showConfirmModal()

      if (isConfirmed) {
        mutate(id)
      }
    } catch (error) {
      // TODO: should be implemented logic handling error
    }
  }, [ id, showConfirmModal, mutate ])

  return (
    <CommentControlsView
      isOwner={isOwner}
      onDelete={onDelete}
    />
  )
}
