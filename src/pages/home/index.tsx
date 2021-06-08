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

import './index.less'

export interface HomePageProps {}

export const HomePageWrap = styled.div``

export const BannerWrap = styled.div`
  height: 380px;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: center;
  align-items: center;
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
  color: #01081e;
  line-height: 64px;
`
export const BannerDescription = styled.span`
  opacity: 0.6;
  font-family: URWDIN-Regular;
  font-size: 20px;
  color: #01081e;
  line-height: 32px;
  margin-top: 24px;
  max-width: 640px;
`

export const BaseWrap = styled(Column)`
  width: 940px;
  margin: 0 auto;
`

const ImageWrap = styled(Row)`
  width: 380px;
  height: 238px;
  background: #b2ffee;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
`

const Characteristics = [
  {
    description: 'Fully compatible with Ethereum and ERC-20 smart contracts, with extremely low migration costs',
    image: require('../../assets/images/home/c1.png').default,
  },
  {
    description:
      'KuCoin Token (KCS) will serve as the only core fuel and native token for KCC and can be used in scenarios such as gas fee payment',
    image: require('../../assets/images/home/c2.png').default,
  },
  {
    description: 'A block every 3 seconds results in faster transaction confirmation and higher chain performance',
    image: require('../../assets/images/home/c3.png').default,
  },
  {
    description: 'Proof of Staked Authority (PoSA) consensus algorithm, high efficiency, security and stability',
    image: require('../../assets/images/home/c4.png').default,
  },
]

export const MailSubText = styled.span`
  width: 312px;
  height: 24px;
  font-size: 16px;
  font-family: URWDIN-Regular, URWDIN;
  font-weight: 400;
  color: rgba(1, 8, 30, 0.38);
  line-height: 24px;
`

const BaseSubText = styled.span`
  width: 600px;
  height: 24px;
  font-size: 16px;
  font-family: URWDIN-Regular, URWDIN;
  font-weight: 400;
  color: rgba(1, 8, 30, 0.38);
  line-height: 24px;
  text-align: center;
`
const PartnerItemWrap = styled(CenterRow)`
  height: 140px;
  width: 140px;
  background: #f2f4f7;
  border-radius: 12px;
`

const Subscribe = styled.span`
  font-family: URWDIN-Regular, URWDIN;
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
      console.log(res)
      if (res.data.status === 400 && res.data?.detail) {
        message.warning(res.data.detail)
      } else {
        message.success(t(`Subscription Success`))
      }

      setEmail('')
    } catch (e) {
      console.log(e?.response)
      message.error(t(`${e?.response?.data?.detail}`))
    } finally {
      setDisable(false)
    }
  }

  return (
    <HomePageWrap>
      {/* banner */}
      <BannerWrap className="home-banner-container">
        <BannerContentWrap>
          <BannerTitle>{t('Facilitate the flow of value around the world')}</BannerTitle>
          <BannerDescription>
            {t(
              'KuChain provides efficient and low-cost trust value exchange and connection services for decentralized applications.'
            )}
          </BannerDescription>
          <Button type="primary" style={{ marginTop: '24px', width: '145px', height: '36px' }}>
            {t(`Get Start Now`)}
            <RightOutlined style={{ fontSize: '12px' }} />
          </Button>
        </BannerContentWrap>
      </BannerWrap>

      {/* notice bar */}
      <NoticeBar />

      {/* why */}
      <BaseWrap style={{ paddingTop: '80px' }}>
        <TitleText>{t('Why KuCoin Community Chain')}</TitleText>
        <RowBetween style={{ alignItems: 'center', paddingTop: '68px' }}>
          <ImageWrap>
            <img src={require('../../assets/images/home/why-bg.png').default} style={{ width: '80%' }} />
          </ImageWrap>
          <ParagraphText style={{ width: '480px' }}>
            {t(
              '1.Fully compatible with Ethereum and ERC-20 smart contracts, with extremely low migration costs KuCoin 2. Token (KCS) will serve as the only core fuel and native token for KCC and can be used in scenarios such as gas fee payment. 3.A block every 3 seconds results in faster transaction confirmation and higher chain performance'
            )}
          </ParagraphText>
        </RowBetween>
        <DivideLine style={{ marginTop: '80px', opacity: 0.24 }} />
      </BaseWrap>

      {/* CharacteristicsComponent */}
      <BaseWrap style={{ paddingTop: '88px' }}>
        <TitleText>{t('Our Characteristics')}</TitleText>
        <div style={{ paddingTop: '70px' }}>{CharacteristicsComponent}</div>
        <DivideLine style={{ marginTop: '80px', opacity: 0.24 }} />
      </BaseWrap>

      {/* MileStone */}
      <BaseWrap style={{ padding: '88px 0 65px 0' }}>
        <ColumnCenter>
          <TitleText>{t('MileStone')}</TitleText>
          <CenterRow gap="8px" justify="flex-start" style={{ marginTop: '44px', paddingLeft: '3px' }}>
            <span>MileStone</span>
          </CenterRow>
        </ColumnCenter>
      </BaseWrap>

      {/* Partner */}
      <BaseWrap style={{ padding: '0px 0 65px 0' }}>
        <ColumnCenter>
          <TitleText>{t('Partner')}</TitleText>
          <CenterRow gap="8px" justify="flex-start" style={{ marginTop: '44px', paddingLeft: '3px' }}>
            {PartnerListComponent}
          </CenterRow>
        </ColumnCenter>
        <DivideLine style={{ marginTop: '80px', opacity: 0.24 }} />
      </BaseWrap>

      {/* Join the KCC Community */}
      <BaseWrap style={{ padding: '0px 0 65px 0' }}>
        <ColumnCenter>
          <TitleText>{t('Join the KCC Community')}</TitleText>
          <BaseSubText>
            {t(
              'KuChain provides efficient and low-cost trust value exchange and connection services for decentralized applications.'
            )}
          </BaseSubText>
          <RowBetween style={{ marginTop: '44px' }}>{ContactListComponent}</RowBetween>
        </ColumnCenter>
      </BaseWrap>

      <DivideLine style={{ marginTop: '0px', opacity: 0.24 }} />

      {/* mail */}
      <BaseWrap style={{ padding: '75px 0  100px 0' }}>
        <ColumnCenter>
          <TitleText>{t('Subscribe to our Mailing List')}</TitleText>
          <MailSubText>{t('We’ll send you updates about Matic Network')}</MailSubText>
          <Row style={{ width: '400px', marginTop: '16px' }}>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ border: 'none', backgroundColor: 'rgba(1,8,30,0.04)' }}
              placeholder={t('Please input your Email address...')}
            />
            <Button type="primary" style={{ marginLeft: '20px' }} onClick={subscribe} disabled={disable}>
              <Subscribe>{t('Subscribe')}</Subscribe>
            </Button>
          </Row>
        </ColumnCenter>
      </BaseWrap>
    </HomePageWrap>
  )
}

export default HomePage
