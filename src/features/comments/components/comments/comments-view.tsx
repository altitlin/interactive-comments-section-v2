import React, { Dispatch, SetStateAction, memo } from 'react'

import { User } from '@features/user'
import { Comment } from '@features/comments/components/comment'
import { Comment as CommentType } from '@features/comments/services/model'

import styles from './comments.module.scss'

type CommentsViewProps = {
  comments: CommentType[]
  currentUserName: User['username']
  editableCommentId: CommentType['_id']
  onDelete: (id: string) => () => void
  setEditableCommentId: Dispatch<SetStateAction<string>>
  resetEditableCommentId: () => void
}

export const CommentsView = memo(
  Object.assign(
    ({
      comments,
      currentUserName,
      editableCommentId,
      onDelete,
      setEditableCommentId,
      resetEditableCommentId,
    }: CommentsViewProps) => {
      const renderComment = ({ _id, user, ...rest }: CommentType) => (
        <Comment
          key={_id}
          _id={_id}
          isOwner={currentUserName === user.username}
          isEditable={editableCommentId === _id}
          user={user}
          onDelete={onDelete(_id)}
          setEditableCommentId={setEditableCommentId}
          resetEditableCommentId={resetEditableCommentId}
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
    },
    { displayName: 'CommentsView' }
  )
)
