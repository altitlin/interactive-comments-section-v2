import React, { FC } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import { RenderIf } from '@components'

import { ReplyIcon, DeleteIcon, EditIcon } from '@features/comments/assets/icons'

import styles from './comment-controls.module.scss'

type CommentControlsProps = {
  isOwner: boolean
}

export const CommentControls: FC<CommentControlsProps> = ({
  isOwner,
}) => (
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
