/* eslint-disable react/jsx-no-useless-fragment */
import React, { FC, PropsWithChildren } from 'react'

type AppProps = PropsWithChildren<Record<string, unknown>>

export const App: FC<AppProps> = ({ children }) => (
  <>{children}</>
)
