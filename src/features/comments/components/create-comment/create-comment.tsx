import React, { ComponentProps, useCallback, useMemo } from 'react'

import { FormComment } from '@features/comments/components/form-comment'
import {
  withAvatarFormComment
} from '@features/comments/hocs/with-avatar-form-comment'
import { useCreateComment } from '@features/comments/hooks/use-create-comment'

type FormCommentProps = ComponentProps<typeof FormComment>

export const CreateComment = withAvatarFormComment(() => {
  const { mutate } = useCreateComment()

  const initialValues: FormCommentProps['initialValues'] = useMemo(
    () => ({ comment: '' }),
    []
  )

  const onCreate: FormCommentProps['onSubmit'] = useCallback(
    (values, form) => {
      mutate({
        content: values.comment,
        // TODO: should be fxied
        user: '634852a212bc342cb3fbc0ff',
      })
      form?.reset()
    },
    [ mutate ]
  )

  return (
    <FormComment
      initialValues={initialValues}
      nameSubmitButton="Send"
      onSubmit={onCreate}
    />
  )
})
