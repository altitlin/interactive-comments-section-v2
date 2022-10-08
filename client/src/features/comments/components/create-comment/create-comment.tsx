import React, { ComponentProps, useCallback, useMemo } from 'react'

import { FormComment } from '@features/comments/components/form-comment'
import {
  withAvatarFormComment
} from '@features/comments/hocs/with-avatar-form-comment'

type FormCommentProps = ComponentProps<typeof FormComment>

export const CreateComment = withAvatarFormComment(() => {
  const initialValues: FormCommentProps['initialValues'] = useMemo(
    () => ({ comment: '' }),
    []
  )

  const onSend: FormCommentProps['onSubmit'] = useCallback(
    (values, form) => {
      console.log(values)
      form?.reset()
    },
    []
  )

  return (
    <FormComment
      initialValues={initialValues}
      nameSubmitButton='Send'
      onSubmit={onSend}
    />
  )
})
