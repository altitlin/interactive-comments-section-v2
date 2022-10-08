import React, { FC, PropsWithChildren } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'

import { RenderIf } from '@components'

import { Comment as CommentType } from '@features/comments/services/model'
import { CommentControls } from '@features/comments/components/comment-controls'
import { CommentScore } from '@features/comments/components/comment-score'

import styles from './comment.module.scss'

type CommentProps = PropsWithChildren<CommentType & {
  isOwner?: boolean
}>

export const Comment: FC<CommentProps> = ({
  content,
  createdAt,
  score,
  user,
  replies,
  replyingTo,
  isOwner,
  children,
}) => (
  <Box className={styles.commentContainer}>
    <Box className={styles.comment}>
      <Grid container spacing={2}>
        <Grid item xs='auto'>
          <CommentScore score={score} />
        </Grid>
        <Grid container item xs={12} sm rowSpacing={2}>
          <Grid alignItems='center' item container columnSpacing={2}>
            <Grid item xs='auto'>
              <Avatar
                src={user.image}
                alt='User avatar'
                className={styles.commentUserAvatar}
              />
            </Grid>
            <Grid item xs='auto' className={styles.commentUserName}>
              {user.username}
            </Grid>
            <RenderIf isTrue={!!isOwner}>
              <Grid item xs='auto'>
                <Chip label='you' className={styles.commentBadge} />
              </Grid>
            </RenderIf>
            <Grid item xs='auto' className={styles.commentCreatedAt}>
              1 month ago
            </Grid>
            <Grid item xs display='flex' justifyContent='flex-end'>
              <CommentControls isOwner={!!isOwner} />
            </Grid>
          </Grid>
          <Grid item component='p' xs={11} className={styles.commentText}>
            <RenderIf isTrue={!!replyingTo}>
              <strong className={styles.commentTextReplyingTo}>
                {`@${replyingTo} `}
              </strong>
            </RenderIf>
            {content}
          </Grid>
        </Grid>
      </Grid>
    </Box>
    <RenderIf isTrue={!!children}>
      <Box className={styles.commentReplies}>
        <div className={styles.commentRepliesSeperator} />
        <div>{children}</div>
      </Box>
    </RenderIf>
  </Box>
)
