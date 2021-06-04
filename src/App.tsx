import React, { Suspense } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import AppLayout from './layouts/AppLayout'

import Home from './pages/home/'

import './App.less'

export default function App() {
  return (
    <Suspense fallback={'loading'}>
      <HashRouter>
        <AppLayout>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </AppLayout>
      </HashRouter>
    </Suspense>
  )
}
