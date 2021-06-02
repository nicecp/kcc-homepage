import React, { CSSProperties } from 'react'
import './kcc-logo.less'

export enum PictureType {
  'svg',
  'png',
}

interface KccLogoProps {
  abbr?: boolean
  lang?: string
  sourceType?: PictureType
  styles?: CSSProperties
}

//  default choose english logo，svg type，full logo.
const KccLogo: React.FunctionComponent<KccLogoProps> = ({
  abbr = false,
  lang = 'en',
  sourceType = PictureType.svg,
  styles,
}) => {
  const generateLogoPath = (abbr: boolean, lang: string, sourceType: PictureType) => {
    let folder = ''
    if (abbr) {
      folder = 'AbbreviatedLettersLogo'
    } else if (lang === 'zh-CN' || lang === 'zh-TW') {
      folder = 'ChineseLogo'
    } else {
      folder = 'EnglishLogo'
    }
    return `/logo/${folder}/KuCoinCommunityChain_Green.${PictureType[sourceType]}`
  }

  const logoSource = React.useMemo(() => {
    return generateLogoPath(abbr, lang, sourceType)
  }, [lang, abbr, sourceType])

  console.log(logoSource)

  return (
    <div className="kcc-logo-container" style={styles}>
      <img src={logoSource} width="100%" height="auto" />
    </div>
  )
}

export default React.memo(KccLogo)
