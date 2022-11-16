import React, {
  useCallback,
  useMemo,
  useRef,
  FC,
  PropsWithChildren
} from 'react'

import { useBoolean } from '@hooks'

import {
  ConfirmModalContextState,
  ConfirmModalContextUpdater
} from './confirm-modal-context'
import { ConfirmModalState, ConfirmModalUpdater } from './types'

type ConfirmModalProviderProps = PropsWithChildren<Record<string, unknown>>

export const ConfirmModalProvider: FC<ConfirmModalProviderProps> = ({
  children,
}) => {
  const { value: show, setTrue, setFalse } = useBoolean()
  const resolver = useRef<(value: boolean) => void>()

  const showConfirmModal = useCallback(() => {
    setTrue()
    return new Promise((resolve) => {
      resolver.current = resolve
    })
  }, [ setTrue ])

  const onOk = useCallback(() => {
    if (resolver.current) {
      resolver.current(true)
      setFalse()
    }
  }, [ setFalse ])

  const onCancel = useCallback(() => {
    if (resolver.current) {
      resolver.current(false)
      setFalse()
    }
  }, [ setFalse ])

  const contextState: ConfirmModalState = useMemo(() => ({ show }), [ show ])

  const contextUpdater: ConfirmModalUpdater = useMemo(() => ({
    showConfirmModal,
    onOk,
    onCancel,
  }), [ onCancel, onOk, showConfirmModal ])

  return (
    <ConfirmModalContextState.Provider value={contextState}>
      <ConfirmModalContextUpdater.Provider value={contextUpdater}>
        {children}
      </ConfirmModalContextUpdater.Provider>
    </ConfirmModalContextState.Provider>
  )
}
