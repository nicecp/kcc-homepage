import { useSelector } from 'react-redux'

// import { addPopup, PopupContent, removePopup, toggleWalletModal, toggleSettingsMenu } from './actions'
import { AppState } from '../index'

export function useBlockNumber(): number | undefined {
  return useSelector((state: AppState) => 0)
}

export function useDark(): boolean {
  return useSelector((state: AppState) => state.application.darkMode === true)
}

export function useLanguage(): string {
  return useSelector((state: AppState) => state.application.language)
}

// get the list of active popups
/* export function useActivePopups(): AppState['application']['popupList'] {
  const list = useSelector((state: AppState) => state.application.popupList)
  return useMemo(() => list.filter(item => item.show), [list])
} */
