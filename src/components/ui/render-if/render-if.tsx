/* eslint-disable react/jsx-no-useless-fragment */
import React, { FC, PropsWithChildren } from 'react'

type RenderIfProps = PropsWithChildren<{
  isTrue: boolean
}>

export const RenderIf: FC<RenderIfProps> = ({ children, isTrue }) => (
  isTrue ? <>{children}</> : null
)
