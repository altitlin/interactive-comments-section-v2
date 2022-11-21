import React from 'react'
import Button from '@mui/material/Button'

import { ConfirmModal } from '@components'
import { useConfirmModalUpdater } from '@context'

import { config } from './config'
import styles from './delete-confirm-modal.module.scss'

export const DeleteConfirmModal = () => {
  const { onOk, onCancel } = useConfirmModalUpdater()

  return (
    <ConfirmModal {...config}>
      <Button
        variant="contained"
        className={styles.deleteConfirmModalBtnCancel}
        onClick={onCancel}
      >
        No, cancel
      </Button>
      <Button
        variant="contained"
        className={styles.deleteConfirmModalBtnDelete}
        onClick={onOk}
      >
        Yes, delete
      </Button>
    </ConfirmModal>
  )
}
