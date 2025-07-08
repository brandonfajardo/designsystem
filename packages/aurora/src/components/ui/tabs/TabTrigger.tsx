import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'
import { tabTriggerVariants } from './TabVariants'
import type { TabsTriggerProps } from './TabTypes'
import { useTabContext } from './TabContext'
import { getTabIcon } from './TabUtil'
import { tabTriggerSizeProps } from './TabPropsConst'

function TabsTrigger({
  className,
  size: tabTriggerSize,
  variant,
  inverse,
  leftIcon,
  rightIcon,
  ...props
}: TabsTriggerProps) {
  const {
    size: contextSize,
  } = useTabContext()

  const size =
    tabTriggerSize ??
    contextSize ??
    tabTriggerSizeProps.MEDIUM

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        tabTriggerVariants({
          size,
          variant,
          inverse,
        }),
        className,
      )}
      {...props}
    >
      {leftIcon &&
        getTabIcon(
          leftIcon,
          size,
        )}
      {props.children}
      {rightIcon &&
        getTabIcon(
          rightIcon,
          size,
        )}
    </TabsPrimitive.Trigger>
  )
}

export { TabsTrigger }
