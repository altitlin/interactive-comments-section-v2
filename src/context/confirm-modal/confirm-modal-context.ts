import { createContext, useContext } from 'react'

import { ConfirmModalState, ConfirmModalUpdater } from './types'

export const ConfirmModalContextUpdater = createContext<ConfirmModalUpdater>(
  {} as ConfirmModalUpdater
)
export const ConfirmModalContextState = createContext<ConfirmModalState>(
  {} as ConfirmModalState
)

export const useConfirmModalUpdater = () => {
  const context = useContext(ConfirmModalContextUpdater)

  if (!context) {
    throw new Error('useConfirmModalUpdater was used outside of ConfirmModalProvider')
  }

  return context
}

export const useConfirmModalState = () => {
  const context = useContext(ConfirmModalContextState)

  if (!context) {
    throw new Error('useConfirmModalUpdater was used outside of ConfirmModalProvider')
  }

  return context
}
