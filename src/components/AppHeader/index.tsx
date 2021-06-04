import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import AppHeaderLogo from '../AppHeaderLogo'
import AppMenu from '../AppMenu'
import ChangeLanguage from '../ChangeLanguage/index'

const AppHeaderWrap = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
`

const HeaderLeftWrap = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-between;
  align-items: center;
`

const AppHeaderContent = styled(HeaderLeftWrap)`
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
`

const AppHeader: React.FunctionComponent = () => {
  return (
    <AppHeaderWrap>
      <AppHeaderContent>
        <HeaderLeftWrap>
          <AppHeaderLogo />
          <AppMenu />
        </HeaderLeftWrap>
        <ChangeLanguage />
      </AppHeaderContent>
    </AppHeaderWrap>
  )
}

export default AppHeader
