import { cva } from 'class-variance-authority'
import {
  iconButtonSizeProps,
  iconButtonVariantProps,
} from './iconButtonPropsConst'

export const buttonVariants =
  cva(
    `
    flex items-center justify-center
    outline-none rounded-action-1 hover:cursor-pointer
    disabled:bg-opacity-50 disabled:pointer-events-none disabled:opacity-50
    focus-visible:outline-solid focus-visible:outline-3 focus-visible:outline-offset-3
    [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 transition-all
  `,
    {
      variants: {
        size: {
          [iconButtonSizeProps.XXSMALL]:
            'size-6',
          [iconButtonSizeProps.XSMALL]:
            'size-8',
          [iconButtonSizeProps.SMALL]:
            'size-10',
          [iconButtonSizeProps.MEDIUM]:
            'size-14',
          [iconButtonSizeProps.LARGE]:
            'size-16',
        },
        variant: {
          [iconButtonVariantProps.DEFAULT]: `
          bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active
          `,
          [iconButtonVariantProps.SECONDARY]: `
          bg-fill-medium text-foreground-high
          hover:bg-fill-medium-hover active:bg-fill-medium-active
          `,
          [iconButtonVariantProps.OUTLINE]: `
          border hover:border-[1px] active:border-[2px] border-border-medium text-foreground-high
          hover:bg-transparent-hover active:bg-transparent-active
          `,
          [iconButtonVariantProps.GHOST]: `
          text-foreground-high hover:bg-transparent-hover active:bg-transparent-active
          `,
        },
        inverse: {
          true: 'focus-visible:outline-inv-focus',
          false:
            'focus-visible:outline-focus',
        },
        loading: {
          true: 'pointer-events-none opacity-50',
        },
      },
      compoundVariants: [
        {
          variant:
            iconButtonVariantProps.DEFAULT,
          inverse: true,
          className:
            'bg-primary text-primary-foreground',
        },
        {
          variant:
            iconButtonVariantProps.OUTLINE,
          inverse: true,
          className:
            'border hover:border-[1px] hover:bg-inv-transparent-hover active:bg-inv-transparent-active active:border-[2px] border-inv-border-medium text-inv-foreground-high',
        },
        {
          variant:
            iconButtonVariantProps.SECONDARY,
          inverse: true,
          className:
            'bg-inv-fill-medium text-inv-foreground-high hover:bg-inv-fill-medium-hover active:bg-inv-fill-medium-active',
        },
        {
          variant:
            iconButtonVariantProps.GHOST,
          inverse: true,
          className:
            'text-inv-foreground-high hover:bg-inv-transparent-hover active:bg-inv-transparent-active',
        },
      ],
      defaultVariants: {
        size: iconButtonSizeProps.SMALL,
        loading: false,
        variant:
          iconButtonVariantProps.DEFAULT,
        inverse: false,
      },
    },
  )
