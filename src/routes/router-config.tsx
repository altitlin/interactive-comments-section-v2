import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { CommentsPage, NotFoundPage } from '@pages'

import { BaseRouter } from './constants'

export const RouterConfig = () => (
  <Routes>
    <Route path={BaseRouter.ROOT} element={<CommentsPage />} />
    <Route path={BaseRouter.NOT_FOUND_PAGE} element={<NotFoundPage />} />
  </Routes>
)
