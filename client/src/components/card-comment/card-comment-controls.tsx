import React, { FC } from 'react'
import { Grid, Button } from '@mui/material'

import { ReplyIcon, DeleteIcon, EditIcon } from '@icons'
import { RenderIf } from '@components'

import styles from './card-comment.scss'

type CardCommentControlsProps = {
  isOwner: boolean
}

export const CardCommentControls: FC<CardCommentControlsProps> = ({
  isOwner,
}) => (
  <>
    <RenderIf isTrue={!isOwner}>
      <Grid item xs={2}>
        <Button
          variant="text"
          startIcon={<ReplyIcon />}
          className={styles.cardCommentBtnReply}
        >
          Reply
        </Button>
      </Grid>
    </RenderIf>
    <RenderIf isTrue={isOwner}>
      <Grid item>
        <Button
          variant="text"
          startIcon={<DeleteIcon />}
          className={styles.cardCommentBtnDelete}
        >
          Delete
        </Button>
        <Button
          variant="text"
          startIcon={<EditIcon />}
          className={styles.cardCommentBtnEdit}
        >
          Edit
        </Button>
      </Grid>
    </RenderIf>
  </>
)
