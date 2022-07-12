import React, { FC } from 'react'
import { Button } from '@mui/material'

import { PlusIcon, MinusIcon } from '@icons'

import styles from './score.scss'

type ScoreProps = {
  score: number
}

export const Score: FC<ScoreProps> = ({ score }) => (
  <Button
    variant="contained"
    startIcon={<PlusIcon />}
    endIcon={<MinusIcon />}
    className={styles.btnScore}
  >
    {score}
  </Button>
)
