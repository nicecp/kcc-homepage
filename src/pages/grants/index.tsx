import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { BannerContentWrap, BannerDescription, BannerTitle, BannerWrap } from '../home'
import { useTranslation } from 'react-i18next'
import { BaseWrap, ButtonText } from '../home/index'
import Row, { CenterRow } from '../../components/Row/index'
import { DivideLine, ParagraphText, TitleText } from '../../components/Common'
import Column, { ColumnCenter } from '../../components/Column'
import { AutoColumn } from '../../components/Column/index'
import { theme } from '../../constants/theme'

export interface GrantsPageProps {}

const MailSubText = styled.div`
  width: auto;
  height: 24px;
  font-size: 16px;
  font-family: URWDIN-Regular, URWDIN;
  font-weight: 400;
  color: #fff;
  line-height: 24px;
`

const GrantsPageWrap = styled.div`
  position: relative;
  background: #000;
  height: auto;
  z-index: 1;
`

const GrantBgCover = styled.img`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`

const CoverWrap = styled.div`
  position: relative;
  z-index: 0;
`

const CoverImgWrap = styled.div`
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;
  heigth: 100%;
`

const BannerBgImage = require('../../assets/images/grant/grant-banner-bg@2x.png').default

export const GrantBannerWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 80px;
  height: 460px;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: center;
  align-items: center;
  background-size: auto 100%;
  z-index: 3;
`

const NumberText = styled.div`
  font-style: italic;
  font-size: 80px;
  font-family: URWDIN-Bold, URWDIN;
  font-weight: normal;
  color: #49ffa1;
  line-height: 96px;
`

const SubTitle = styled.div`
  height: 32px;
  font-size: 32px;
  font-family: URWDIN-Medium, URWDIN;
  font-weight: 500;
  color: ${theme.colors.primary};
  line-height: 0px;
`

const ParagraphTitle = styled.div`
  width: 610px;
  font-size: 20px;
  font-family: URWDIN-Regular, URWDIN;
  font-weight: 400;
  color: #fff;
  line-height: 32px;
`
const ParagraphIcon = styled.img`
  margin-left: 20px;
  width: 30px;
`
const SmallText = styled.div`
  font-size: 16px;
`

const BottomCoverImage = styled.img`
  display: absolute;
  bottom: 0;
  left: 0;
`

const GrantsPage: React.FunctionComponent<GrantsPageProps> = () => {
  const { t } = useTranslation()

  return (
    <GrantsPageWrap>
      {/* banner */}
      <GrantBgCover
        src={require('../../assets/images/grant/grant-banner-bg@2x.png').default}
        width="auto"
        height="460px"
      />
      <GrantBannerWrap>
        <BannerContentWrap>
          <BannerTitle>{t('Grant Program')}</BannerTitle>
          <BannerDescription>
            {t(
              'In support of our mission, the KCS Foundation grants program funds software development and research in the field of decentralized software protocols.'
            )}
          </BannerDescription>
          <ButtonText>
            <Button type="primary" style={{ marginTop: '24px', width: '145px', height: '36px' }}>
              <span className="text">{t('Apply Now')}</span>
            </Button>
          </ButtonText>
        </BannerContentWrap>
      </GrantBannerWrap>

      {/* content */}

      <CoverWrap>
        <BaseWrap style={{ paddingTop: '120px' }}>
          <CenterRow justify="space-between">
            <Column>
              <ParagraphText style={{ width: '480px' }}>{t('Grant Introduce 1')}</ParagraphText>
              <ParagraphText style={{ width: '480px' }}>{t('Grant Type 1')}</ParagraphText>
              <ParagraphText style={{ width: '480px' }}>{t('Grant Type 2')}</ParagraphText>
            </Column>

            <ColumnCenter
              style={{
                width: '240px',
                height: '240px',
                background: 'rgba(151, 208, 195, 0.21)',
                justifyContent: 'center',
                padding: '0px 0',
              }}
            >
              <NumberText>10+</NumberText>
              <SubTitle style={{ marginTop: '24px' }}>{t('Project Type')}</SubTitle>
            </ColumnCenter>
          </CenterRow>
          <CenterRow justify="space-between" style={{ marginTop: '94px', alignItems: 'stretch' }}>
            <ColumnCenter
              style={{
                width: '240px',
                background: 'rgba(151, 208, 195, 0.21)',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ColumnCenter>
                <NumberText>2+</NumberText>
                <SubTitle style={{ marginTop: '24px' }}>{t('Project Type')}</SubTitle>
              </ColumnCenter>
            </ColumnCenter>
            <AutoColumn style={{ width: '610px' }}>
              <Row>
                <ParagraphTitle>{t(`Development`)}</ParagraphTitle>
                {/*  <ParagraphIcon src={require('../../')} /> */}
              </Row>
              <ParagraphText style={{ marginTop: '10px' }}>{t(`Grant Introduce 2`)}</ParagraphText>

              <Row style={{ marginTop: '44px' }}>
                <ParagraphTitle>{t(`Research`)}</ParagraphTitle>
                {/*  <ParagraphIcon src={require('../../')} /> */}
              </Row>
              <ParagraphText style={{ marginTop: '10px' }}>
                {t(
                  `KCS Foundation funds research projects that advance and explore protocols in the  Blockchain Technology Stack`
                )}

                <SmallText style={{ marginTop: '5px' }}>
                  - {t(`Analysis of existing protocols and implementations`)}
                </SmallText>
                <SmallText>- {t(`Security testing`)}</SmallText>
              </ParagraphText>
            </AutoColumn>
          </CenterRow>
        </BaseWrap>
        <DivideLine style={{ margin: '100px 0px', opacity: 0.24 }} />
        {/* mail */}
        <BaseWrap style={{ padding: '0px 0  100px 0', position: 'relative', zIndex: 2 }}>
          <ColumnCenter>
            <TitleText>{t('Open Grants Program')}</TitleText>
            <MailSubText style={{ width: 'auto', textAlign: 'left' }}>
              {t('Grant Payment Amount')}
              <br />
              {t('Grant Payment')}
            </MailSubText>
          </ColumnCenter>
          <CenterRow justify="center" style={{ marginTop: '42px' }}>
            <ButtonText>
              <Button type="primary" style={{ width: '145px', height: '36px' }}>
                <span className="text"> {t('Apply Now')}</span>
              </Button>
            </ButtonText>
          </CenterRow>
        </BaseWrap>
        <CoverImgWrap>
          <BottomCoverImage
            src={require('../../assets/images/grant/bottom-cover-bg.png').default}
            width="100%"
            height="1200px"
          />
        </CoverImgWrap>
      </CoverWrap>
    </GrantsPageWrap>
  )
}

export default GrantsPage
