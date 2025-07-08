import React, {
  type ReactNode,
} from 'react'
import type {
  IconProps,
  IconSizeProps,
} from '../IconWrapper/Icon'
import { tabTriggerSizeProps } from './TabPropsConst'

export const calcIconSize = (
  TabTriggerSize: tabTriggerSizeProps,
  iconSize?: IconSizeProps,
): IconSizeProps => {
  return iconSize
    ? (iconSize as IconSizeProps)
    : iconSizeMap[
        TabTriggerSize as keyof typeof iconSizeMap
      ]
}
export const iconSizeMap = {
  [tabTriggerSizeProps.SMALL]: 16,
  [tabTriggerSizeProps.MEDIUM]: 18,
  [tabTriggerSizeProps.LARGE]: 20,
} as const

/**
 * Get the tab icon with the correct size
 * @param icon - The icon to get
 * @param size - The size of the tab
 * @returns The tab icon with the correct size
 */
export function getTabIcon(
  icon: ReactNode,
  size: tabTriggerSizeProps,
): ReactNode {
  if (
    React.isValidElement<IconProps>(
      icon,
    )
  ) {
    const originalProps =
      icon.props

    const newSize =
      calcIconSize(
        size,
        (originalProps.size as IconSizeProps) ??
          undefined,
      )

    console.log(
      'newSize: ',
      newSize,
    )
    return React.cloneElement<IconProps>(
      icon,
      {
        ...originalProps,
        size: newSize,
      },
    )
  }
  return icon
}
