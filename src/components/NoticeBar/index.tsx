import React from 'react'
import styled from 'styled-components'
import { SoundFilled } from '@ant-design/icons'
import { AutoRow, RowBetween } from '../Row/index'
import axios from 'axios'
import { message } from 'antd'
import { useTranslation } from 'react-i18next'

import Slider from 'react-slick'

import { KCC } from '../../constants'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export interface NoticeBarProps {}

const NoticeBarWrap = styled(AutoRow)`
  flex-flow: row nowrap;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #f1f4f7;
`
const Text = styled.span`
  font-family: URWDIN-Regular;
  font-size: 12px;
  color: rgba(1, 8, 30, 0.87);
  margin-left: 8px;
  cursor: pointer;
  max-width: 750px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  &:hover {
    background: #fff;
    text-decoration: underline;
  }
`

const Date = styled.span`
  font-family: URWDIN-Regular;
  font-size: 12px;
  color: rgba(1, 8, 30, 0.87);
  margin-left: 8px;
`

interface Announcement {
  title: string
  pubDate: string
  link: string
  thumbnail?: string
}

const NoticeBar: React.FunctionComponent<NoticeBarProps> = () => {
  const { t } = useTranslation()

  const [announcementList, setAnnoucementList] = React.useState<Announcement[]>([
    {
      title: '...',
      pubDate: '...',
      link: '',
    },
  ])

  const getAnnouncemet = async () => {
    try {
      const res = await axios({
        url: KCC.MEDIA_API,
      })
      setAnnoucementList(() => res?.data?.items?.splice(0, 3))
    } catch {
      message.error(t(`Get Announcement Faied.`))
    }
  }

  React.useEffect(() => {
    getAnnouncemet()
  }, [])

  const nav2Announcement = (route: string) => {
    if (route) {
      window.open(route, '_blank')
    }
  }

  const List = React.useMemo(() => {
    return announcementList.map((item, index) => {
      return (
        <div>
          <RowBetween key={index} style={{ width: '100%', alignItems: 'cetner' }}>
            <Text onClick={nav2Announcement.bind(null, item.link)}>{item.title}</Text>
            <Date>{item.pubDate}</Date>
          </RowBetween>
        </div>
      )
    })
  }, [announcementList])

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    pauseOnHover: true,
    autoplay: true,
    speed: 1000,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  }

  return (
    <NoticeBarWrap>
      <SoundFilled />
      <div style={{ maxWidth: '940px' }}>
        <Slider {...settings}>{List}</Slider>
      </div>
    </NoticeBarWrap>
  )
}

export default NoticeBar
