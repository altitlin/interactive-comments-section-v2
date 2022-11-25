import React, {
  ComponentProps,
  FC,
  useMemo,
  useCallback
} from 'react'

import { FormComment } from '@features/comments/components/form-comment'
import { NAMES_BUTTON } from '@features/comments/constants/form-comment'
import { useUpdateComment } from '@features/comments/hooks/use-update-comment'
import { Comment } from '@features/comments/services'

type FormCommentProps = ComponentProps<typeof FormComment>

type EditCommentProps = {
  id: Comment['_id']
  content: Comment['content']
  resetEditableCommentId: () => void
}

export const EditComment: FC<EditCommentProps> = ({
  id,
  content,
  resetEditableCommentId,
}) => {
  const { mutate } = useUpdateComment()

  const initialValues: FormCommentProps['initialValues'] = useMemo(
    () => ({ comment: content }),
    [ content ]
  )

  const onUpdate: FormCommentProps['onSubmit'] = useCallback(
    (values) => {
      mutate({
        _id: id,
        content: values.comment,
        // TODO: should be fxied
        // user: '634852a212bc342cb3fbc0ff',
      })
      resetEditableCommentId()
    },
    [ id, mutate, resetEditableCommentId ]
  )

  return (
    <FormComment
      initialValues={initialValues}
      nameButton={NAMES_BUTTON.UPDATE}
      flexDirection="column"
      onSubmit={onUpdate}
    />
  )
}
