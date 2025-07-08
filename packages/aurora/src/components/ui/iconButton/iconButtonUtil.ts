import {
  cloneElement,
  type ReactNode,
  isValidElement,
} from 'react'
import type {
  IconProps,
  IconSizeProps,
} from '@/components/ui/IconWrapper/Icon'
import { iconButtonSizeProps } from '@/components/ui/iconButton/iconButtonPropsConst'

export const calcIconSize = (
  buttonSize: iconButtonSizeProps,
  iconSize?: IconSizeProps,
): IconSizeProps => {
  return iconSize
    ? (iconSize as IconSizeProps)
    : iconSizeMap[
        buttonSize as keyof typeof iconSizeMap
      ]
}
export const iconSizeMap = {
  [iconButtonSizeProps.XXSMALL]: 12,
  [iconButtonSizeProps.XSMALL]: 16,
  [iconButtonSizeProps.SMALL]: 20,
  [iconButtonSizeProps.MEDIUM]: 22,
  [iconButtonSizeProps.LARGE]: 24,
} as const

/**
 * Get the tab icon with the correct size
 * @param icon - The icon to get
 * @param size - The size of the tab
 * @returns The tab icon with the correct size
 */
export function getIconButtonIcon(
  icon: ReactNode,
  size: iconButtonSizeProps,
): ReactNode {
  if (
    isValidElement<IconProps>(
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

    return cloneElement<IconProps>(
      icon,
      {
        ...originalProps,
        size: newSize,
      },
    )
  }
  return icon
}
