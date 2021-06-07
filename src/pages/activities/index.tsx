import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { BaseWrap } from '../home/index'

export interface GrantsPageProps {}

const ActivitiesPageWrap = styled(BaseWrap)``

const Title = styled.div`
  height: 32px;
  font-size: 32px;
  font-family: URWDIN-Medium, URWDIN;
  font-weight: 500;
  color: #01081e;
  line-height: 38px;
`
const SubTitle = styled.div`
  height: 32px;
  font-size: 20px;
  font-family: URWDIN-Regular, URWDIN;
  font-weight: 400;
  color: #01081e;
  line-height: 32px;
`

const ActivityWrap = styled.div`
  width: 280px;
  height: 208px;
  background: #f1f4f7;
  border-radius: 6px;
`

const ActivityImaga = styled.img`
  width: 280px;
  height: 208px;
  background: #f1f4f7;
  border-radius: 6px;
`

const ActivitiesPage: React.FunctionComponent<GrantsPageProps> = () => {
  const activities = [
    {
      thumbnail: '',
      name: '',
      deadline: '2021-06-07 10:57:33',
      content: '',
    },
    {
      thumbnail: '',
      name: '',
      deadline: '2021-06-07 10:57:33',
      content: '',
    },
    {
      thumbnail: '',
      name: '',
      deadline: '2021-06-07 10:57:33',
      content: '',
    },
    {
      thumbnail: '',
      name: '',
      deadline: '2021-06-07 10:57:33',
      content: '',
    },
    {
      thumbnail: '',
      name: '',
      deadline: '2021-06-07 10:57:33',
      content: '',
    },
    {
      thumbnail: '',
      name: '',
      deadline: '2021-06-07 10:57:33',
      content: '',
    },
    {
      thumbnail: '',
      name: '',
      deadline: '2021-06-07 10:57:33',
      content: '',
    },
    {
      thumbnail: '',
      name: '',
      deadline: '2021-06-07 10:57:33',
      content: '',
    },
    {
      thumbnail: '',
      name: '',
      deadline: '2021-06-07 10:57:33',
      content: '',
    },
    {
      thumbnail: '',
      name: '',
      deadline: '2021-06-07 10:57:33',
      content: '',
    },
  ]

  const { t } = useTranslation()

  return (
    <ActivitiesPageWrap>
      {/* banner */}
      <Title>{t(`KCC Activities`)}</Title>
      <SubTitle>{t(`In`)}</SubTitle>
    </ActivitiesPageWrap>
  )
}

export default ActivitiesPage
