import React from 'react'
import styled from 'styled-components'
import { KCC } from '../../constants/index'

import './index.less'

export interface AppHeaderLogoProps {}

const AppHeaderLogoWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`
const Text = styled.span`
  font-size: 20px;
  margin-left: 8px;
  font-weight: bold;
`

const AppHeaderLogo: React.FunctionComponent<AppHeaderLogoProps> = () => {
  return (
    <AppHeaderLogoWrap>
      <img src={require('../../assets/images/home/header-logo.png').default} width="35px" height="auto" />
      <Text className="kcc-name">{KCC.fullName}</Text>
    </AppHeaderLogoWrap>
  )
}

export default AppHeaderLogo
