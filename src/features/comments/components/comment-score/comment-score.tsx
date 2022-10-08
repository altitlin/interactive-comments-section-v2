import React, { FC } from 'react'
import Button from '@mui/material/Button'

import { PlusIcon, MinusIcon } from '@features/comments/assets/icons'
import { Comment } from '@features/comments/services/model'

import styles from './comment-score.module.scss'

type CommentScoreProps = {
  score: Comment['score']
}

export const CommentScore: FC<CommentScoreProps> = ({
  score
}) => (
  <Button
    variant='contained'
    startIcon={<PlusIcon />}
    endIcon={<MinusIcon />}
    className={styles.btnScore}
  >
    {score}
  </Button>
)
