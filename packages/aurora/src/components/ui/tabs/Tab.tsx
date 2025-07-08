import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'
import {
  tabListVariants,
  tabRootVariants,
} from './TabVariants'
import type { TabsListProps } from './TabTypes'
import { TabProvider } from './TabContext'
import { tabListSizeProps } from './TabPropsConst'

function Tabs({
  className,
  ...props
}: React.ComponentProps<
  typeof TabsPrimitive.Root
>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn(
        tabRootVariants({}),
        className,
      )}
      {...props}
    />
  )
}

function TabsList({
  className,
  variant,
  size,
  inverse,
  ...props
}: TabsListProps) {
  return (
    <TabProvider
      value={{
        size: size as tabListSizeProps,
      }}
    >
      <TabsPrimitive.List
        data-slot="tabs-list"
        className={cn(
          tabListVariants({
            variant,
            size,
            inverse,
          }),
          className,
        )}
        {...props}
      />
    </TabProvider>
  )
}

export { Tabs, TabsList }
