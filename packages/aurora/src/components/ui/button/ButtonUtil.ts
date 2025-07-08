import {
  cloneElement,
  isValidElement,
  type ReactNode,
} from 'react'
import type {
  IconProps,
  IconSizeProps,
} from '../IconWrapper/Icon'
import { buttonSizeProps } from './buttonPropsConst'

export const calcIconSize = (
  buttonSize: buttonSizeProps,
  iconSize?: IconSizeProps,
): IconSizeProps => {
  return iconSize
    ? (iconSize as IconSizeProps)
    : iconSizeMap[
        buttonSize as keyof typeof iconSizeMap
      ]
}
export const iconSizeMap = {
  [buttonSizeProps.XXSMALL]: 12,
  [buttonSizeProps.XSMALL]: 16,
  [buttonSizeProps.SMALL]: 20,
  [buttonSizeProps.MEDIUM]: 22,
  [buttonSizeProps.LARGE]: 24,
} as const

/**
 * Get the tab icon with the correct size
 * @param icon - The icon to get
 * @param size - The size of the tab
 * @returns The tab icon with the correct size
 */
export function getButtonIcon(
  icon: ReactNode,
  size: buttonSizeProps,
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

    console.log(
      'newSize: ',
      newSize,
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
