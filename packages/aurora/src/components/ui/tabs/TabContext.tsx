import {
  createContext,
  useContext,
} from 'react'
import type { tabTriggerSizeProps } from './TabPropsConst'

interface TabContextProps {
  size?: tabTriggerSizeProps
}

const TabContext =
  createContext<TabContextProps>(
    {},
  )

export const TabProvider =
  TabContext.Provider

export const useTabContext =
  () => useContext(TabContext)
