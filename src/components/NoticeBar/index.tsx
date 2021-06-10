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
import './index.less'
import { theme } from '../../constants/theme'

export interface NoticeBarProps {}

const BG = require('../../assets/images/home/why-top-cover.png').default

const NoticeBarWrap = styled(AutoRow)`
  flex-flow: row nowrap;
  height: 44px;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`

const NoticeBgWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.36);
  opacity: 0.08;
`

const Text = styled.span`
  padding: 0;
  font-family: URWDIN-Regular;
  font-size: 12px;
  color: #fff !important;
  margin-left: 8px;
  cursor: pointer;
  width: 750px;
  max-width: 750px;
  text-overflow: ellipsis;
  overflow: hidden;
  opacity: 1;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
  }
`

const Date = styled.span`
  font-family: URWDIN-Regular;
  font-size: 12px;
  color: #fff;
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
      title: 'Loading...',
      pubDate: '',
      link: '',
    },
  ])

  const getAnnouncemet = async () => {
    try {
      const res = await axios({
        url: KCC.MEDIA_API,
      })
      const list = [...res?.data?.items?.splice(0, 3)]
      console.log(list)
      setAnnoucementList(() => list)
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
        <div key={index}>
          <RowBetween style={{ width: 'auto', marginTop: '10px', alignItems: 'cetner' }}>
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
      <NoticeBgWrap />
      <SoundFilled style={{ color: theme.colors.primary }} />
      <div style={{ maxWidth: '940px', height: '40px', overflow: 'hidden' }}>
        <Slider {...settings}>{List}</Slider>
      </div>
    </NoticeBarWrap>
  )
}

export default NoticeBar
