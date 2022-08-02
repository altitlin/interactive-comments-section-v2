import React, { FC, PropsWithChildren } from 'react'
import {
  Box,
  Grid,
  Avatar,
  Chip
} from '@mui/material'

import { Comment } from '@models'
import { RenderIf } from '@components'

import { Score } from './score'
import { Controls } from './controls'

import styles from './card-comment.scss'

export type CardCommentProps = PropsWithChildren<Comment & {
  isOwner?: boolean
}>

export const CardComment: FC<CardCommentProps> = ({
  content,
  createdAt,
  score,
  user,
  replies,
  replyingTo,
  isOwner,
  children,
}) => (
  <Box className={styles.cardCommentContainer}>
    <Box className={styles.cardComment}>
      <Grid container spacing={2}>
        <Grid item xs="auto">
          <Score score={score} />
        </Grid>
        <Grid container item xs={12} sm rowSpacing={2}>
          <Grid alignItems="center" item container columnSpacing={2}>
            <Grid item xs="auto">
              <Avatar
                src={user.image}
                alt="User avatar"
                className={styles.cardCommentUserAvatar}
              />
            </Grid>
            <Grid item xs="auto" className={styles.cardCommentUserName}>
              {user.username}
            </Grid>
            <RenderIf isTrue={!!isOwner}>
              <Grid item xs="auto">
                <Chip label="you" className={styles.cardCommentBadge} />
              </Grid>
            </RenderIf>
            <Grid item xs="auto" className={styles.cardCommentCreatedAt}>
              1 month ago
            </Grid>
            <Grid item xs display="flex" justifyContent="flex-end">
              <Controls isOwner={!!isOwner} />
            </Grid>
          </Grid>
          <Grid item component="p" xs={11} className={styles.cardCommentText}>
            <RenderIf isTrue={!!replyingTo}>
              <strong className={styles.cardCommentTextReplyingTo}>
                {`@${replyingTo} `}
              </strong>
            </RenderIf>
            {content}
          </Grid>
        </Grid>
      </Grid>
    </Box>
    <RenderIf isTrue={!!children}>
      <Box className={styles.cardCommentReplies}>
        <div className={styles.cardCommentRepliesSeperator} />
        <div>{children}</div>
      </Box>
    </RenderIf>
  </Box>
)
