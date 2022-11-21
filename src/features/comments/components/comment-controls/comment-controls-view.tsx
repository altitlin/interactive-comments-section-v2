import React, { memo } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import { RenderIf } from '@components'
import { ReplyIcon, DeleteIcon, EditIcon } from '@features/comments/assets/icons'

import styles from './comment-controls.module.scss'

type CommentControlsViewProps = {
  isOwner: boolean
  onDelete: () => void
}

export const CommentControlsView = memo(
  Object.assign(
    ({
      isOwner,
      onDelete,
    }: CommentControlsViewProps) => (
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
    ),
    { displayName: 'CommentControlsView' }
  )
)
