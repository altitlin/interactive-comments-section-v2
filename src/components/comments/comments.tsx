import React from 'react'

import { mockComments, mockCurrentUser } from '@mock-data'
import { CardComment } from '@components'

import styles from './comments.scss'

export const Comments = () => (
  <div className={styles.comments}>
    {mockComments.map(({ id, user, ...props }) => (
      <CardComment
        key={id}
        id={id}
        isOwner={mockCurrentUser.username === user.username}
        user={user}
        {...props}
      />
    ))}
  </div>
)
