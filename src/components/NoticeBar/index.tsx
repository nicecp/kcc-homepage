import React from 'react'
import styled from 'styled-components'
import { SoundFilled } from '@ant-design/icons'
import { AutoRow } from '../Row/index'

export interface NoticeBarProps {}

const NoticeBarWrap = styled(AutoRow)`
  height: 44px;
  align-items: center;
  border-bottom: 1px solid #f1f4f7;
`
const Text = styled.span`
  font-family: URWDIN-Regular;
  font-size: 12px;
  color: rgba(1, 8, 30, 0.87);
  line-height: 20px;
  margin-left: 8px;
`

const NoticeBar: React.FunctionComponent<NoticeBarProps> = () => {
  return (
    <NoticeBarWrap justify="center">
      <SoundFilled />
      <Text>温馨提示: [文案部分由产品提供],文案过长,或者多语言情况下换行处理</Text>
    </NoticeBarWrap>
  )
}

export default NoticeBar
