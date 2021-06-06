import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateBlockNumber } from './actions'
import { useLanguage } from './hooks'
import { useTranslation } from 'react-i18next'

export default function Updater(): null {
  // init language
  const { i18n } = useTranslation()
  const lang = useLanguage()

  console.log('lang=', lang)

  useEffect(() => {
    console.log('init language', lang)
    i18n.changeLanguage(lang)
  }, [])

  return null
}
