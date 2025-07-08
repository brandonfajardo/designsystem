import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'
import { tabContentVariants } from './TabVariants'

function TabsContent({
  className,
  inverse,
  ...props
}: React.ComponentProps<
  typeof TabsPrimitive.Content
> & {
  inverse?: boolean
}) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        tabContentVariants({
          inverse,
        }),
        className,
      )}
      {...props}
    />
  )
}

export { TabsContent }
