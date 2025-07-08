import React, {
  forwardRef,
} from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import type { ButtonProps } from './ButtonTypes'
import Icon from '@/components/ui/IconWrapper/Icon'
import {
  calcIconSize,
  getButtonIcon,
} from './ButtonUtil'
import { buttonVariants } from './ButtonVariants'
import {
  buttonSizeProps,
  buttonVariantProps,
} from './buttonPropsConst'

/**
 * Renders the content of the button based on the size, loading state, and children.
 * @param size - The size of the button
 * @param loading - Whether the button is loading
 * @param children - The content of the button
 * @returns The content of the button
 */
const renderContent = (
  size: buttonSizeProps,
  loading?: boolean,
  children?: React.ReactNode,
) => {
  console.log(
    'size: ',
    calcIconSize(size),
  )
  return loading ? (
    <Icon
      name="Loader2"
      size={calcIconSize(
        size,
      )}
      className="animate-spin"
    />
  ) : (
    children
  )
}

/** Button component */
const Button = forwardRef(
  function Button(
    {
      className,
      size,
      loading = false,
      variant = buttonVariantProps.DEFAULT,
      inverse = false,
      asChild = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) {
    // Replace the component with the Slot component if asChild is true
    const Comp = asChild
      ? Slot
      : 'button'

    return (
      <Comp
        data-slot="button"
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
        {...props}
      >
        {leftIcon &&
          getButtonIcon(
            leftIcon,
            size as buttonSizeProps,
          )}

        {/* Loading Icon or children */}
        {renderContent(
          size as buttonSizeProps,
          loading,
          children,
        )}

        {rightIcon &&
          getButtonIcon(
            rightIcon,
            size as buttonSizeProps,
          )}
      </Comp>
    )
  },
)

/** Export the Button component */
export { Button }
