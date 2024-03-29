/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { FC, PropsWithChildren, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

import { useConfirmModalState, useConfirmModalUpdater } from '@context'

import styles from './confirm-modal.module.scss'

type ConfirmModalProps = PropsWithChildren<{
  title: string
  content: ReactNode | ReactNode[] | string
}>

export const ConfirmModal: FC<ConfirmModalProps> = ({
  title,
  content,
  children,
}) => {
  const { show } = useConfirmModalState()
  const { onCancel } = useConfirmModalUpdater()

  const element = (
    <Dialog
      open={show}
      sx={{
        '& .MuiDialog-paper': {
          margin: 0,
          padding: '35px 30px 30px',
          width: '350px',
          borderRadius: '10px',
        },
      }}
      onClose={onCancel}
    >
      <DialogTitle className={styles.confirmModalTitle}>{title}</DialogTitle>
      <DialogContent className={styles.confirmModalContent}>{content}</DialogContent>
      <DialogActions className={styles.confirmModalActions}>{children}</DialogActions>
    </Dialog>
  )
  const $root = document.getElementById('root')!

  return createPortal(element, $root)
}
