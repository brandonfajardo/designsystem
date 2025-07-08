import type { VariantProps } from 'class-variance-authority'
import { buttonVariants } from './iconButtonVariants'
import type {
  iconButtonSizeProps,
  iconButtonVariantProps,
} from './iconButtonPropsConst'

export type iconButtonProps =
  React.ComponentProps<'button'> &
    VariantProps<
      typeof buttonVariants
    > & {
      /** If true, the component will be rendered as a child of the parent component. */
      asChild?: boolean
      /** The icon of the button. */
      icon: React.ReactNode
      /** If true, the component will be rendered in a loading state. */
      loading?: boolean
      /** The size of the button. */
      size?: iconButtonSizeProps
      /** The variant of the button. */
      variant?: iconButtonVariantProps
      /** If true, the component will be rendered with an inverse color scheme on a dark background. */
      inverse?: boolean
      /** The aria-label of the button. */
      ariaLabel?: string
    }
