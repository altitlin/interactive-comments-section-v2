import React, { FC, useCallback } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import { RenderIf } from '@components'
import { ReplyIcon, DeleteIcon, EditIcon } from '@features/comments/assets/icons'
import { useConfirmModalUpdater } from '@context'

import styles from './comment-controls.module.scss'

type CommentControlsProps = {
  isOwner: boolean
}

export const CommentControls: FC<CommentControlsProps> = ({
  isOwner,
}) => {
  const { showConfirmModal } = useConfirmModalUpdater()

  const onDelete = useCallback(async () => {
    try {
      const isConfirmed = await showConfirmModal()

      if (isConfirmed) {
        // TODO: should be implemented logic deleting comment for current user
      }
    } catch (error) {
      // TODO: should be implemented logic handling error
    }
  }, [ showConfirmModal ])

  return (
    <>
      <RenderIf isTrue={!isOwner}>
        <Button
          variant="text"
          startIcon={<ReplyIcon />}
          className={styles.commentBtnControlReply}
        >
          Reply
        </Button>
      </RenderIf>
      <RenderIf isTrue={isOwner}>
        <Grid item>
          <Button
            variant="text"
            startIcon={<DeleteIcon />}
            className={styles.commentBtnControlDelete}
            onClick={onDelete}
          >
            Delete
          </Button>
          <Button
            variant="text"
            startIcon={<EditIcon />}
            className={styles.commentBtnControlEdit}
          >
            Edit
          </Button>
        </Grid>
      </RenderIf>
    </>
  )
}
