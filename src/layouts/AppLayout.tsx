import React from 'react'
import { FunctionComponent } from 'react'
import AppHeader from '../components/AppHeader/index'

// Not fullscreen mode
const AppBaseLayout: FunctionComponent = ({ children }) => {
  return (
    <div className="app-base-layout-container">
      <AppHeader />
    </div>
  )
}

// App layout
const AppLayout: FunctionComponent = ({ children }) => {
  const isFullScreen = localStorage.getItem('FULLSCREEN_MODE')

  if (isFullScreen) return <div>{children}</div>
  return <AppBaseLayout>{children}</AppBaseLayout>
}

export default AppLayout
