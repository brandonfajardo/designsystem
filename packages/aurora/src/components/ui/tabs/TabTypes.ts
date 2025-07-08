import type {
  IconName,
  IconSizeProps,
} from '@/components/ui/IconWrapper/Icon'
import {
  tabListSizeProps,
  tabListVariantProps,
  tabTriggerSizeProps,
  tabTriggerVariantProps,
} from './TabPropsConst'
import * as TabsPrimitive from '@radix-ui/react-tabs'

type TabsListProps =
  React.ComponentProps<
    typeof TabsPrimitive.List
  > & {
    /** tab list size */
    size?: tabListSizeProps
    /** tab list variant */
    variant?: tabListVariantProps
    /** tab list inverse */
    inverse?: boolean
  }

type TabIconProps = {
  icon: IconName
  size?: IconSizeProps
  rotate?: number
}

type TabsTriggerProps =
  React.ComponentProps<
    typeof TabsPrimitive.Trigger
  > & {
    /** tab trigger size */
    size?: tabTriggerSizeProps
    /** tab trigger variant */
    variant?: tabTriggerVariantProps
    /** tab trigger inverse */
    inverse?: boolean
    /** tab trigger left icon */
    leftIcon?: React.ReactNode
    /** tab trigger right icon */
    rightIcon?: React.ReactNode
  }

export type {
  TabsTriggerProps,
  TabsListProps,
  TabIconProps,
}
