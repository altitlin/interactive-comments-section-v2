import React, { ComponentProps, useCallback, useMemo } from 'react'

import { FormComment } from '@features/comments/components/form-comment'
import { NAMES_BUTTON } from '@features/comments/constants/form-comment'
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
      const createdComment = {
        content: values.comment,
        // TODO: should be fxied
        user: '634852a212bc342cb3fbc0ff',
      }

      mutate(createdComment, {
        onSuccess: () => form?.reset(),
      })
    },
    [ mutate ]
  )

  return (
    <FormComment
      initialValues={initialValues}
      nameButton={NAMES_BUTTON.SEND}
      onSubmit={onCreate}
    />
  )
})
