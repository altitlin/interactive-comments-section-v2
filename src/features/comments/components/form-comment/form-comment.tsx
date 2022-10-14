import React, { FC } from 'react'
import { Form, FormProps } from 'react-final-form'
import Button from '@mui/material/Button'

import { FinalFormTextField } from '@components'

import { Comment } from '@features/comments/services/model'

import styles from './form-comment.module.scss'

type InitialValues = {
  comment: Comment['content']
}

type FormCommentProps = {
  initialValues: InitialValues
  nameSubmitButton: string
  onSubmit: (values: InitialValues, form: FormProps<InitialValues>['form']) => void
}

export const FormComment: FC<FormCommentProps> = ({
  initialValues,
  nameSubmitButton,
  onSubmit,
}) => (
  <Form<InitialValues>
    initialValues={initialValues}
    onSubmit={onSubmit}
    render={({ handleSubmit, submitting, pristine }) => (
      <form onSubmit={handleSubmit} className={styles.formComment}>
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
          disabled={submitting || pristine}
          className={styles.formCommentButton}
        >
          {nameSubmitButton}
        </Button>
      </form>
    )}
  />
)
