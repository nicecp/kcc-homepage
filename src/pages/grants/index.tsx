import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { BannerContentWrap, BannerDescription, BannerTitle, BannerWrap, MailSubText } from '../home'
import { useTranslation } from 'react-i18next'
import { BaseWrap } from '../home/index'
import Row, { RowBetween, CenterRow } from '../../components/Row/index'
import { DivideLine, ParagraphText, TitleText } from '../../components/Common'
import Column, { ColumnCenter } from '../../components/Column'
import { AutoColumn } from '../../components/Column/index'

export interface GrantsPageProps {}

const GrantsPageWrap = styled.div``

const NumberText = styled.div`
  height: 80px;
  font-size: 80px;
  font-family: URWDIN-Light, URWDIN;
  font-weight: 300;
`

const SubTitle = styled.div`
  height: 32px;
  font-size: 32px;
  font-family: URWDIN-Medium, URWDIN;
  font-weight: 500;
  color: #01081e;
  line-height: 38px;
`

const ParagraphTitle = styled.div`
  width: 610px;
  font-size: 20px;
  font-family: URWDIN-Regular, URWDIN;
  font-weight: 400;
  color: #01081e;
  line-height: 32px;
`
const ParagraphIcon = styled.img`
  margin-left: 20px;
  width: 30px;
`
const SmallText = styled.div`
  font-size: 10px;
`

const GrantsPage: React.FunctionComponent<GrantsPageProps> = () => {
  const { t } = useTranslation()

  return (
    <GrantsPageWrap>
      {/* banner */}
      <BannerWrap className="home-banner-container">
        <BannerContentWrap>
          <BannerTitle>{t('Grant Program')}</BannerTitle>
          <BannerDescription>
            {t(
              'In support of our mission, the KCS Foundation grants program funds software development and research in the field of decentralized software protocols.'
            )}
          </BannerDescription>
          <Button type="primary" style={{ marginTop: '24px', width: '145px', height: '36px' }}>
            {t('Apply Now')}
          </Button>
        </BannerContentWrap>
      </BannerWrap>

      {/* content */}

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
              background: '#4195e6',
              borderRadius: '12px',
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
              background: '#41e6af',
              borderRadius: '12px',
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

              <SmallText>- {t(`Analysis of existing protocols and implementations`)}</SmallText>
              <SmallText>- {t(`Security testing`)}</SmallText>
            </ParagraphText>
          </AutoColumn>
        </CenterRow>
      </BaseWrap>

      <DivideLine style={{ margin: '100px 0px', opacity: 0.24 }} />

      {/* mail */}
      <BaseWrap style={{ padding: '0px 0  100px 0' }}>
        <ColumnCenter>
          <TitleText>{t('Open Grants Program')}</TitleText>
          <MailSubText style={{ width: 'auto', textAlign: 'left' }}>
            {t('Grant Payment Amount')}
            <br />
            {t('Grant Payment')}
          </MailSubText>
        </ColumnCenter>
        <CenterRow justify="center" style={{ marginTop: '42px' }}>
          <Button type="primary" style={{ width: '145px', height: '36px' }}>
            {t('Apply Now')}
          </Button>
        </CenterRow>
      </BaseWrap>
    </GrantsPageWrap>
  )
}

export default GrantsPage
