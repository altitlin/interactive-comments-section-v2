export type ConfirmModalState = {
  show: boolean
}

export type ConfirmModalUpdater = {
  onOk: () => void
  onCancel: () => void
  showConfirmModal: () => Promise<unknown>
}
