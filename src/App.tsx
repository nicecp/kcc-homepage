import React, { Suspense } from 'react'

import AppLayout from './layouts/AppLayout'

import './App.less'
import { HashRouter } from 'react-router-dom'

export default function App() {
  return (
    <Suspense fallback={'loading'}>
      <HashRouter>
        <AppLayout />
      </HashRouter>
    </Suspense>
  )
}
