import { Button, Card, Popover, Select } from 'antd'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { DownOutlined } from '@ant-design/icons'
import { allLanguages } from '../../constants/languageCodes'
import { useTranslation } from 'react-i18next'
import { RowBetween } from '../Row'
import { useDispatch } from 'react-redux'
import { AppState, AppDispatch } from '../../state/index'
import { changeTheme, changeLanguage } from '../../state/application/actions'
import { useLanguage } from '../../state/application/hooks'

export interface ChangeLanguageProps {}

const MenuWrap = styled.div`
  justify-self: flex-end;
`

const LanguageItem = styled.div``

const Text = styled.div`
  height: 22px;
  font-size: 14px;
  font-family: URWDIN-Medium, URWDIN;
  font-weight: 500;
  color: #666;
  line-height: 24px;
  margin: 8px;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`
const Image = styled.img`
  height: 20px;
  width: auto;
`

const LanguageButton = styled(Button)`
  width: 94px;
  height: 26px;
  line-height: none;
  padding: 0;
  font-size: 12px;
`

const ChangeLanguage: React.FunctionComponent<ChangeLanguageProps> = () => {
  const { i18n } = useTranslation()

  const [show, setShow] = useState(false)

  const ref = useRef<any>(null)

  let timer: any = null

  const dispatch = useDispatch<AppDispatch>()

  const showPop = () => {
    timer && clearTimeout(timer)
    setShow(() => true)
  }

  const hidePopover = () => {
    timer = setTimeout(() => {
      setShow(() => false)
    }, 500)
  }

  const selectChange = (code: string) => {
    dispatch(changeLanguage({ lng: code }))
    i18n.changeLanguage(code)
    setShow(() => false)
  }

  const lang = useLanguage()

  const currentLanguage = React.useMemo(() => {
    for (let i = 0; i < allLanguages.length; i++) {
      if (allLanguages[i].code === i18n.language) {
        return allLanguages[i].language
      }
    }
    return 'English'
  }, [i18n.language, allLanguages, lang])

  const selectOptions = allLanguages.map((lng, index) => {
    return (
      <LanguageItem key={index} onClick={selectChange.bind(null, lng.code)} onMouseEnter={showPop}>
        <RowBetween>
          <Text> {lng.language}</Text>
        </RowBetween>
      </LanguageItem>
    )
  })
  return (
    <MenuWrap onMouseEnter={showPop} onMouseLeave={hidePopover}>
      <Popover placement="bottom" content={selectOptions} visible={show}>
        <LanguageButton>
          {currentLanguage}
          <DownOutlined style={{ fontSize: '10px' }} />
        </LanguageButton>
      </Popover>
    </MenuWrap>
  )
}

export default ChangeLanguage
