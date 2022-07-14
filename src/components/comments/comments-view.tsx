import React, { FC } from 'react'

import { CommentWithReplies } from '@types'
import { CardComment } from '@components'

import styles from './comments.scss'

type CommentsViewProps = {
  comments: CommentWithReplies[]
  currentUserName: string
}

export const CommentsView: FC<CommentsViewProps> = ({ comments, currentUserName }) => (
  <div className={styles.comments}>
    {comments.map(({ id, user, ...props }) => (
      <CardComment
        key={id}
        id={id}
        isOwner={currentUserName === user.username}
        user={user}
        {...props}
      />
    ))}
  </div>
)
