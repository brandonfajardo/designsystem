import React, {
  forwardRef,
} from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import type { iconButtonProps } from './iconButtonTypes'
import Icon from '@/components/ui/IconWrapper/Icon'
import {
  calcIconSize,
  getIconButtonIcon,
} from './iconButtonUtil'
import { buttonVariants } from './iconButtonVariants'
import {
  iconButtonSizeProps,
  iconButtonVariantProps,
} from './iconButtonPropsConst'

/** Button component */
const IconButton = forwardRef(
  function IconButton(
    {
      className,
      size,
      loading = false,
      variant = iconButtonVariantProps.DEFAULT,
      inverse = false,
      asChild = false,
      icon,
      ariaLabel,
      disabled = false,
      ...props
    }: iconButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) {
    const Comp = asChild
      ? Slot
      : 'button'

    return (
      <Comp
        data-slot="icon-button"
        className={cn(
          buttonVariants({
            size,
            loading,
            variant,
            inverse,
          }),
          className,
        )}
        disabled={
          loading || disabled
        }
        ref={ref}
        aria-label={ariaLabel}
        {...props}
      >
        {/* Loading Icon or icon */}
        {loading ? (
          <Icon
            name="Loader2"
            className="animate-spin"
            size={calcIconSize(
              size as iconButtonSizeProps,
            )}
          />
        ) : (
          getIconButtonIcon(
            icon,
            size as iconButtonSizeProps,
          )
        )}
      </Comp>
    )
  },
)

export { IconButton }
