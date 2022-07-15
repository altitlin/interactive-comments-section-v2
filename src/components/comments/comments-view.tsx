import React, { FC } from 'react'

import { Comment } from '@models'
import { CardComment } from '@components'

import styles from './comments.scss'

type CommentsViewProps = {
  comments: Comment[]
  currentUserName: string
}

export const CommentsView: FC<CommentsViewProps> = ({ comments, currentUserName }) => {
  const renderCardComment = ({ id, user, ...rest }: Comment) => (
    <CardComment
      key={id}
      id={id}
      isOwner={currentUserName === user.username}
      user={user}
      {...rest}
    >
      {rest.replies?.map(renderCardComment)}
    </CardComment>
  )

  return (
    <div className={styles.comments}>
      {comments.map(renderCardComment)}
    </div>
  )
}
