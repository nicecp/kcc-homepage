import React from 'react'
import styled from 'styled-components'
import { ColumnCenter } from '../Column/index'
import { useTranslation } from 'react-i18next'
import Row, { RowBetween } from '../Row'
import copy from 'copy-to-clipboard'
import { message } from 'antd'
import { theme } from '../../constants/theme'
export interface ContactCardProps {
  icon: string
  app: string
  account: string
}

const ContactCardWrap = styled(ColumnCenter)`
  align-items: center;
  justify-content: flex-start;
  height: 160px;
`

const AppIcon = styled.img`
  width: 64px;
  height: 64px;
  cursor: pointer;
`

const AppText = styled.div`
  height: 20px;
  font-size: 14px;
  font-family: URWDIN-Regular, URWDIN, PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #fff;
  margin-top: 10px;
  line-height: 20px;
`
const AccountText = styled.span`
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: ${theme.colors.primary};
  line-height: 22px;
`
const CopyIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 7px;
  cursor: pointer;
`

const ContactCard: React.FunctionComponent<ContactCardProps> = (props) => {
  const { t } = useTranslation()

  const copyAccount = (account: string) => {
    copy(account, { debug: true, message: 'copy success' })
    message.success(`${account} 已经复制到剪贴板`)
  }

  return (
    <ContactCardWrap>
      <ColumnCenter>
        <AppIcon src={props.icon} />
        <AppText>{t(props.app)}</AppText>
      </ColumnCenter>
      {/* <Row style={{ justifyContent: 'center', alignItems: 'center', marginTop: '11px' }}>
        <AccountText>{props.account}</AccountText>
        <CopyIcon
          src={require('../../assets/images/home/copy.png').default}
          onClick={copyAccount.bind(null, props.account)}
        />
      </Row> */}
    </ContactCardWrap>
  )
}

export default ContactCard
