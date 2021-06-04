import { ConfigProvider } from 'antd'
import React, { FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import store from './state'

const Providers: FunctionComponent = ({ children }) => {
  return (
    <ConfigProvider>
      <Provider store={store}>{children}</Provider>
    </ConfigProvider>
  )
}

export default Providers
