import React, { FC } from 'react'
import { Form, FormProps } from 'react-final-form'
import Button from '@mui/material/Button'

import { FinalFormTextField } from '@components'
import { Comment } from '@features/comments/services/model'

import styles from './form-comment.module.scss'

type FlexDirections = 'row' | 'column'

const formCommentClasses: Record<FlexDirections, string> = {
  row: styles.formCommentRow,
  column: styles.formCommentColumn,
}

type InitialValues = {
  comment: Comment['content']
}

type FormCommentProps = {
  initialValues: InitialValues
  nameButton: string
  flexDirection?: FlexDirections
  onSubmit: (values: InitialValues, form: FormProps<InitialValues>['form']) => void
}

export const FormComment: FC<FormCommentProps> = ({
  initialValues,
  nameButton,
  flexDirection = 'row',
  onSubmit,
}) => (
  <Form<InitialValues>
    initialValues={initialValues}
    onSubmit={onSubmit}
    render={({ handleSubmit, values, submitting }) => (
      <form
        onSubmit={handleSubmit}
        className={`${styles.formComment} ${formCommentClasses[flexDirection]}`}
      >
        <FinalFormTextField
          fullWidth
          name="comment"
          placeholder="Add a comment..."
          variant="outlined"
          className={styles.formCommentTextarea}
        />
        <Button
          variant="contained"
          type="submit"
          disabled={submitting || !values.comment}
          className={styles.formCommentButton}
        >
          {nameButton}
        </Button>
      </form>
    )}
  />
)
