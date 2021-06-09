import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Button, Form, Input, message } from 'antd'
import axios from 'axios'
import { RightOutlined } from '@ant-design/icons'

import Column from '../../components/Column/index'
import { ParagraphText, TitleText } from '../../components/Common'
import Row, { RowBetween } from '../../components/Row/index'
import SloganPicture from '../../components/SloganPicture'
import { DivideLine } from '../../components/Common/index'
import NoticeBar from '../../components/NoticeBar'

import { ColumnCenter } from '../../components/Column/index'
import { KCC } from '../../constants/index'
import ContactCard from '../../components/ContactCard/index'
import { CenterRow } from '../../components/Row/index'
import { theme } from '../../constants/theme'

export interface HomePageProps {}

const BannerBgImage = require('../../assets/images/home/banner-bg@2x.png').default
const BannerBgHover = require('../../assets/images/home/home-top-cover@2x.png').default

export const HomePageWrap = styled.div`
  position: relative;
  background: #000;
  height: auto;
  z-index: 1;
`

const BannerCoverWrap = styled.img`
  width: 100%;
  position: absolute;
`

export const BannerWrap = styled.div`
  padding-top: 80px;
  height: 460px;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: center;
  align-items: center;
  background: url(${BannerBgImage}) top center no-repeat;
  background-size: auto 100%;
`
export const BannerContentWrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
  width: 1200px;
`
export const BannerTitle = styled.span`
  line-height: 64px;
  font-size: 60px;
  font-family: URWDIN-Bold, PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: ${theme.colors.primary};
  line-height: 64px;
`
export const BannerDescription = styled.span`
  opacity: 0.6;
  font-family: URWDIN-Regular;
  font-size: 20px;
  color: ${theme.colors.primary};
  line-height: 32px;
  margin-top: 24px;
  max-width: 640px;
`

export const BaseWrap = styled(Column)`
  width: 940px;
  margin: 0 auto;
`

const ImageWrap = styled(Row)`
  width: 360px;
  height: 238px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
`

const Characteristics = [
  {
    description: 'KCC INTRODUCE 1',
    image: require('../../assets/images/home/c1.png').default,
  },
  {
    description: 'KCC INTRODUCE 2',
    image: require('../../assets/images/home/c2.png').default,
  },
  {
    description: 'KCC INTRODUCE 3',
    image: require('../../assets/images/home/c3.png').default,
  },
  {
    description: 'KCC INTRODUCE 4',
    image: require('../../assets/images/home/c4.png').default,
  },
]

export const MailSubText = styled.span`
  width: auto;
  height: 24px;
  font-size: 16px;
  font-family: URWDIN-Regular, URWDIN;
  font-weight: 400;
  color: #000;
  line-height: 24px;
`

const BaseSubText = styled.span`
  width: 600px;
  height: 24px;
  font-size: 16px;
  font-family: URWDIN-Regular, URWDIN;
  font-weight: 400;
  color: #fff;
  line-height: 24px;
  text-align: left;
`

const PartnerListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 16px;
  row-gap: 16px;
  margin: auto;
`
const PartnerItemWrap = styled.div`
  display: flex;
  height: 140px;
  width: 140px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  margin: auto;
`

const Subscribe = styled.span`
  font-family: URWDIN-Regular, URWDIN;
`

const ButtonText = styled.div`
  color: #000;
`

const IntroduceCoverImage = require('../../assets/images/home/why-top-cover.png').default

const IntroduceCoverWrap = styled.div`
  position: relative;
`

const IntroduceCoverImageWrap = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  heigth: 50px !important;
`

const IntroduceCover1 = styled.img`
  position: absolute;
  width: 643px;
  height: auto;
  right: 0;
  top: 0px;
  z-index: 1;
`

const IntroduceCover2 = styled.img`
  position: absolute;
  width: 396px;
  height: auto;
  bottom: 0;
  left: 0px;
  z-index: 1;
`

const JoinButtonCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0px;
  z-index: 0;
  background: linear-gradient(0deg, #277453 0%, rgba(97, 223, 101, 0) 100%);
`

const MailWrap = styled(BaseWrap)`
  padding: 75px 0 100px 0;
  background: ${theme.colors.primary};
  position: relative;
  top: -43px;
`

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  const CharacteristicsComponent = Characteristics.map((item, index) => {
    return (
      <SloganPicture
        key={index}
        width="240px"
        url={item.image}
        description={item.description}
        direction={index % 2 === 0 ? 'left' : 'right'}
      />
    )
  })

  const ContactListComponent = KCC.CONTACT_LIST.map((item, index) => {
    return <ContactCard key={index} {...item} />
  })

  const PartnerListComponent = KCC.PARTNER_LIST.map((item, index) => {
    return <PartnerItemWrap key={index} />
  })

  const { t } = useTranslation()

  const [email, setEmail] = React.useState<string>('')
  const [disable, setDisable] = React.useState<boolean>(false)
  const [subscribed, setSubscribed] = React.useState<boolean>(false)

  const subscribe = async () => {
    const emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/

    if (!emailReg.test(email)) {
      message.error(t(`Please provide a valid email address.`))
      return false
    }
    setDisable(true)
    try {
      const res = await axios({
        method: 'post',
        url: KCC.MAIL_SUBSCRIBE_PROXY,
        data: {
          email_address: email,
          status: 'subscribed',
        },
      })
      if (res.data.status === 400) {
        message.warning(t(`Subscription failed`))
      } else {
        message.success(t(`Thank you for subscribing`))
        setSubscribed(() => true)
      }

      setEmail('')
    } catch (e) {
      console.log(e?.response)
      message.error(t(`${e?.response?.data?.detail}`))
    } finally {
      setDisable(false)
    }
  }

  const navToDocs = () => {
    window.open(KCC.DOCS_URL, '_blank')
  }

  return (
    <>
      <HomePageWrap>
        {/* banner */}
        <BannerCoverWrap src={BannerBgHover} />
        <BannerWrap className="home-banner-container">
          <BannerContentWrap>
            <BannerTitle>{t('Mission')}</BannerTitle>
            <BannerDescription>
              {t('To accelerate the flow of value around the world without boundaries')}
            </BannerDescription>

            <ButtonText>
              <Button type="primary" style={{ marginTop: '24px', width: '145px', height: '36px' }} onClick={navToDocs}>
                <ButtonText>
                  {t(`Get Start Now`)}
                  <RightOutlined style={{ fontSize: '10px', marginLeft: '10px' }} />
                </ButtonText>
              </Button>
            </ButtonText>
          </BannerContentWrap>
        </BannerWrap>
      </HomePageWrap>

      {/* why */}
      {/* notice bar */}
      <HomePageWrap>
        <IntroduceCoverWrap>
          <NoticeBar />
          <IntroduceCoverImageWrap src={IntroduceCoverImage} height="400px" width="50%" />
          <BaseWrap style={{ padding: '80px 0', position: 'relative', zIndex: 1 }}>
            <RowBetween style={{ alignItems: 'center', paddingTop: '68px' }}>
              <ImageWrap>
                <img src={require('../../assets/test.png').default} style={{ width: '80%' }} />
              </ImageWrap>
              <Column style={{ marginLeft: '50px' }}>
                <TitleText style={{ width: '660px', textAlign: 'left' }}>{t('Why KuCoin Community Chain')}</TitleText>
                <ParagraphText style={{ width: 'auto' }}>{t(`KCC First Introduction`)}</ParagraphText>
                <ParagraphText style={{ width: 'auto' }}>{t(`KCC Second Introduction`)}</ParagraphText>
              </Column>
            </RowBetween>
            {/*  <DivideLine style={{ marginTop: '80px', opacity: 0.24 }} /> */}
          </BaseWrap>
        </IntroduceCoverWrap>
      </HomePageWrap>

      {/* CharacteristicsComponent */}
      <HomePageWrap>
        <IntroduceCover1 src={require('../../assets/images/home/introduction-right-cover@2x.png').default} />
        <BaseWrap style={{ paddingTop: '88px' }}>
          <TitleText>{t('Our Characteristics')}</TitleText>
          <div style={{ paddingTop: '70px' }}>{CharacteristicsComponent}</div>
          <DivideLine style={{ marginTop: '80px' }} />
        </BaseWrap>

        {/* MileStone */}
        <BaseWrap style={{ padding: '88px 0 65px 0' }}>
          <ColumnCenter>
            <TitleText>{t('Our Milestones')}</TitleText>
            <CenterRow gap="8px" justify="center" style={{ marginTop: '44px', paddingLeft: '3px' }}>
              <ParagraphText>MileStone</ParagraphText>
            </CenterRow>
          </ColumnCenter>
        </BaseWrap>
        <IntroduceCover2 src={require('../../assets/images/home/introduce-cover-2.png').default} />
      </HomePageWrap>

      {/* Partner */}
      <HomePageWrap>
        <BaseWrap style={{ padding: '0px 0 65px 0' }}>
          <ColumnCenter>
            <TitleText>{t('Partner')}</TitleText>
            <PartnerListWrap>{PartnerListComponent}</PartnerListWrap>
          </ColumnCenter>
          <DivideLine style={{ marginTop: '80px', opacity: 0.24 }} />
        </BaseWrap>

        {/* Join the KCC Community */}
        <BaseWrap style={{ padding: '0px 0 65px 0', position: 'relative', zIndex: 2 }}>
          <ColumnCenter>
            <TitleText>{t('Join The KCC Community')}</TitleText>
            <BaseSubText>
              {t('KCC  Community Title')}
              <br />
              {t(`Join KCC Ttile`)}
            </BaseSubText>
            <RowBetween style={{ marginTop: '54px' }}>{ContactListComponent}</RowBetween>
          </ColumnCenter>
        </BaseWrap>
        <JoinButtonCover />
      </HomePageWrap>

      {/* <DivideLine style={{ marginTop: '0px', opacity: 0.24 }} /> */}

      {/* mail */}
      <HomePageWrap>
        <MailWrap>
          <ColumnCenter>
            <TitleText style={{ color: '#000' }}>{t('Subscribe to our Mailing List')}</TitleText>
            <MailSubText>{t('We’ll send you updates about KuCoin Community Chain')}</MailSubText>
            {subscribed ? (
              <Row style={{ width: 'auto', marginTop: '16px' }}>
                <MailSubText style={{ fontSize: '24px', textAlign: 'center' }}>
                  {t(`Thank you for subscribing`)}
                </MailSubText>
              </Row>
            ) : (
              <Row style={{ width: '400px', marginTop: '16px' }}>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ border: 'none', backgroundColor: '#fff' }}
                  placeholder={t('Enter your email address')}
                />
                <Button
                  type="primary"
                  style={{ marginLeft: '20px', background: '#000' }}
                  onClick={subscribe}
                  disabled={disable}
                >
                  <Subscribe>{t('Subscribe')}</Subscribe>
                </Button>
              </Row>
            )}
          </ColumnCenter>
        </MailWrap>
      </HomePageWrap>
    </>
  )
}

export default HomePage
