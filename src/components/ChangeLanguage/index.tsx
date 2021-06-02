import React from 'react'
import styled from 'styled-components'

export interface ChangeLanguageProps {}

const MenuWrap = styled.div`
  justify-self: flex-end;
`

const ChangeLanguage: React.FunctionComponent<ChangeLanguageProps> = () => {
  return <MenuWrap>change</MenuWrap>
}

export default ChangeLanguage
