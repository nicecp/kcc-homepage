import React from 'react'
import styled from 'styled-components'
import Row from '../Row'
import { ParagraphText } from '../Common/index'
import { useTranslation } from 'react-i18next'

export interface PictureProps {
  url: string
  width?: string
  description: string
  direction: string
}

const PictureWrap = styled(Row)`
  align-items: center;
  justify-content: space-between;
`
const ImageDescription = styled(ParagraphText)<{ direction: string }>`
  order: ${({ direction }) => (direction === 'left' ? 1 : 2)};
  max-width: 480px;
  text-align: justify;
`

const Image = styled.img<{ width: string; direction: string }>`
  width: ${({ width }) => width};
  order: ${({ direction }) => (direction === 'left' ? 2 : 1)};
`

const SloganPicture: React.FunctionComponent<PictureProps> = (props) => {
  const { t } = useTranslation()
  return (
    <PictureWrap>
      <Image src={props.url} width={props.width ?? '100%'} direction={props.direction}></Image>
      <ImageDescription direction={props.direction}>{t(props.description)}</ImageDescription>
    </PictureWrap>
  )
}

export default SloganPicture
