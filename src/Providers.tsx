import { ConfigProvider } from 'antd'
import React, { FunctionComponent } from 'react'

const Providers: FunctionComponent = ({ children }) => {
  return <ConfigProvider>{children}</ConfigProvider>
}

export default Providers
