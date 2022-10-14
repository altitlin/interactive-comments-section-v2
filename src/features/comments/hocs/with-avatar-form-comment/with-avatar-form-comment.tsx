import React, { FC, ComponentProps } from 'react'
import Avatar from '@mui/material/Avatar'

import styles from './with-avatar-form-comment.module.scss'

export const withAvatarFormComment = (Componet: FC): FC => {
  const WrappedComponent = (props: ComponentProps<typeof Componet>) => (
    <div className={styles.withAvatarFormComment}>
      <Avatar
        alt="User avatar"
        className={styles.withAvatarFormCommentImg}
        sx={{
 width: 40,
height: 40,
}}
      />
      <Componet {...props} />
    </div>
    )

  WrappedComponent.displayName = 'withAvatarFormComment'

  return WrappedComponent
}
