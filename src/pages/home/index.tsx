import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Button } from 'antd'
import Column from '../../components/Column/index'
import { ParagraphText, TitleText } from '../../components/Common'
import { RowBetween } from '../../components/Row/index'
import SloganPicture from '../../components/SloganPicture'
import { DivideLine } from '../../components/Common/index'
import NoticeBar from '../../components/NoticeBar'
export interface HomePageProps {}

const HomePageWrap = styled.div``

const BannerWrap = styled.div`
  background: #f1f4f7;
  height: 380px;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: center;
  align-items: center;
`
const BannerContentWrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
  width: 1200px;
`
const BannerTitle = styled.span`
  font-family: URWDIN-Demi;
  font-size: 64px;
  color: #01081e;
  line-height: 64px;
`
const BannerDescription = styled.span`
  opacity: 0.6;
  font-family: URWDIN-Regular;
  font-size: 20px;
  color: #01081e;
  line-height: 32px;
  margin-top: 24px;
  max-width: 640px;
`

const BaseWrap = styled(Column)`
  width: 940px;
  padding: 80px 0px;
  margin: 0 auto;
`

const Characteristics = [
  {
    description: 'Fully compatible with Ethereum and ERC-20 smart contracts, with extremely low migration costs',
    image: require('../../assets/test.png').default,
  },
  {
    description:
      'KuCoin Token (KCS) will serve as the only core fuel and native token for KCC and can be used in scenarios such as gas fee payment',
    image: require('../../assets/test.png').default,
  },
  {
    description: 'A block every 3 seconds results in faster transaction confirmation and higher chain performance',
    image: require('../../assets/test.png').default,
  },
  {
    description: 'Proof of Staked Authority (PoSA) consensus algorithm, high efficiency, security and stability',
    image: require('../../assets/test.png').default,
  },
]

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

  const { t } = useTranslation()

  return (
    <HomePageWrap>
      {/* banner */}
      <BannerWrap>
        <BannerContentWrap>
          <BannerTitle>{t('促进价值在全球的流动')}</BannerTitle>
          <BannerDescription>
            {t(
              'KuChain provides efficient and low-cost trust value exchange and connection services for decentralized applications.'
            )}
          </BannerDescription>
          <Button type="primary" style={{ marginTop: '24px', width: '145px', height: '36px' }}>
            Button
          </Button>
        </BannerContentWrap>
      </BannerWrap>

      {/* notice bar */}
      <NoticeBar />

      {/* why */}
      <BaseWrap style={{ paddingTop: '80px' }}>
        <TitleText>{t('Why KuCoin Community Chain')}</TitleText>
        <RowBetween style={{ alignItems: 'center', paddingTop: '68px' }}>
          <img src={require('../../assets/test.png').default} />
          <ParagraphText style={{ width: '480px' }}>
            {t('Fully compatible with Ethereum and ERC-20 smart contracts，With extremely low migrations costs')}
          </ParagraphText>
        </RowBetween>
        <DivideLine style={{ marginTop: '56px' }} />
      </BaseWrap>

      {/* CharacteristicsComponent */}
      <BaseWrap>{CharacteristicsComponent}</BaseWrap>
    </HomePageWrap>
  )
}

export default HomePage
