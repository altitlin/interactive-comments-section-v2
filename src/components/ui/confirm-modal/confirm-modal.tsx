/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { FC, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

import { useConfirmModalState, useConfirmModalUpdater } from '@context'

import styles from './confirm-modal.module.scss'

type ConfirmModalProps = PropsWithChildren<{
  title: string
}>

export const ConfirmModal: FC<ConfirmModalProps> = ({
  title,
  children,
}) => {
  const { show } = useConfirmModalState()
  const { onOk, onCancel } = useConfirmModalUpdater()

  return createPortal(
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
      <DialogTitle className={styles.confirmModalTitle}>
        {title}
      </DialogTitle>
      <DialogContent className={styles.confirmModalContent}>
        {children}
      </DialogContent>
      <DialogActions className={styles.confirmModalActions}>
        <Button
          variant="contained"
          className={styles.confirmModalActionsCancel}
          onClick={onCancel}
        >
          No, cancel
        </Button>
        <Button
          variant="contained"
          className={styles.confirmModalActionsDelete}
          onClick={onOk}
        >
          Yes, delete
        </Button>
      </DialogActions>
    </Dialog>,
    document.getElementById('root')!
  )
}
