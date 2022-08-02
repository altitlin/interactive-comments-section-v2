import React, { FC } from 'react'
import { Grid, Button } from '@mui/material'

import { ReplyIcon, DeleteIcon, EditIcon } from '@icons'
import { RenderIf } from '@components'

import styles from './controls.scss'

type ControlsProps = {
  isOwner: boolean
}

export const Controls: FC<ControlsProps> = ({
  isOwner,
}) => (
  <>
    <RenderIf isTrue={!isOwner}>
      <Button
        variant="text"
        startIcon={<ReplyIcon />}
        className={styles.cardCommentBtnControlReply}
      >
        Reply
      </Button>
    </RenderIf>
    <RenderIf isTrue={isOwner}>
      <Grid item>
        <Button
          variant="text"
          startIcon={<DeleteIcon />}
          className={styles.cardCommentBtnControlDelete}
        >
          Delete
        </Button>
        <Button
          variant="text"
          startIcon={<EditIcon />}
          className={styles.cardCommentBtnControlEdit}
        >
          Edit
        </Button>
      </Grid>
    </RenderIf>
  </>
)
