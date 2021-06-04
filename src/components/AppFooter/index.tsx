import React from 'react'
import styled from 'styled-components'
import Row from '../Row'
import Column from '../Column/index'
import { KCC } from '../../constants'
import { useTranslation } from 'react-i18next'
import { RowBetween } from '../Row/index'
import { FOOTER_LIST } from '../../constants/footerList'

export interface AppFooterProps {}

const AppFooterWrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;
  height: 320px;
  background: #000;
`
const AppFooterContentWrap = styled.div`
  width: 940px;
  padding-top: 43px;
`

const ChainText = styled.div`
  font-family: URWDIN-Regular;
  font-size: 20px;
  color: #0fcd8c;
  line-height: 32px;
  margin-top: 12px;
  width: 245px;
`
const FooterTitle = styled.span`
  font-family: URWDIN-Regular;
  font-size: 20px;
  color: #ffffff;
  line-height: 32px;
`

const FooterLogoImg = styled.img`
  width: 35px;
  height: 40px;
`

const FooterNavListWrap = styled(Column)`
  margin-top: 16px;
`

const FooterNavText = styled.span`
  font-family: URWDIN-Regular;
  font-size: 14px;
  color: #ffffff;
  line-height: 32px;
`

const CopyRightText = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 60px;
  line-height: 60px;
  opacity: 0.6;
  font-family: URWDIN-Regular;
  font-size: 14px;
  color: #ffffff;
  border-top: 1px solid #fff;
`

const AppFooter: React.FunctionComponent<AppFooterProps> = () => {
  const { t } = useTranslation()

  const FooterNavList = FOOTER_LIST.map((item, index) => {
    const children = item.children.map((nav, index) => {
      return <FooterNavText key={index}>{t(nav.navText)}</FooterNavText>
    })
    return (
      <Column key={index}>
        <FooterTitle>{t(item.title)}</FooterTitle>
        <FooterNavListWrap>{children}</FooterNavListWrap>
      </Column>
    )
  })

  return (
    <AppFooterWrap>
      <AppFooterContentWrap>
        <Row>
          <Column style={{ width: '355px', paddingTop: '15px', marginRight: '95px' }}>
            <FooterLogoImg src={require('../../assets/images/home/header-logo.png').default} />
            <ChainText>{t(KCC.FULLNAME)}</ChainText>
          </Column>
          <RowBetween>{FooterNavList}</RowBetween>
        </Row>
        <CopyRightText>CopyRight © 2017 - 2020 KuChain.com. All Rights Reserved.</CopyRightText>
      </AppFooterContentWrap>
    </AppFooterWrap>
  )
}

export default AppFooter
