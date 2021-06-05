import { Select } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { allLanguages } from '../../constants/languageCodes'
import { useTranslation } from 'react-i18next'

export interface ChangeLanguageProps {}

const MenuWrap = styled.div`
  justify-self: flex-end;
`

const ChangeLanguage: React.FunctionComponent<ChangeLanguageProps> = () => {
  const { i18n } = useTranslation()
  const selectChange = (code: string) => {
    i18n.changeLanguage(code)
  }

  const selectOptions = allLanguages.map((lng, index) => {
    return (
      <Select.Option key={index} value={lng.code}>
        {lng.language}
      </Select.Option>
    )
  })
  return (
    <MenuWrap>
      <Select defaultValue="en" onChange={selectChange} style={{ width: '100px' }}>
        {selectOptions}
      </Select>
    </MenuWrap>
  )
}

export default ChangeLanguage
