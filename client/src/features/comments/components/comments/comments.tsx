import React, { FC } from 'react'

import { User } from '@features/user'

import { Comment as CommentType } from '@features/comments/services/model'
import { Comment } from '@features/comments/components/comment'

import styles from './comments.module.scss'

type CommentsProps = {
  comments: CommentType[]
  currentUserName: User['username']
}

export const Comments: FC<CommentsProps> = ({
  comments,
  currentUserName
}) => {
  const renderComment = ({ id, user, ...rest }: CommentType) => (
    <Comment
      key={id}
      id={id}
      isOwner={currentUserName === user.username}
      user={user}
      {...rest}
    >
      {rest.replies?.map(renderComment)}
    </Comment>
  )

  return (
    <div className={styles.comments}>
      {comments.map(renderComment)}
    </div>
  )
}
