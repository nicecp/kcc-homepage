import styled from 'styled-components'
import { theme } from '../../constants/theme'

export const TitleText = styled.span`
  font-family: URWDIN-Demi;
  font-size: 48px;
  color: ${theme.colors.primary};
  text-align: center;
`
export const ParagraphText = styled.div`
  font-family: URWDIN-Regular, PingFangSC-Regular, PingFang SC;
  font-size: 20px;
  color: #ffffff;
  line-height: 32px;
  font-weight: 400;
`

export const DivideLine = styled.div`
  width: 100%;
  height: 1px;
  background: ${theme.colors.primary};
`
