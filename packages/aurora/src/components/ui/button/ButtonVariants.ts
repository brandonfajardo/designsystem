import { cva } from 'class-variance-authority'
import {
  buttonSizeProps,
  buttonVariantProps,
} from './buttonPropsConst'

export const buttonVariants =
  cva(
    `
    flex items-center overflow-hidden inline-flex items-center justify-center whitespace-nowrap font-extrabold transition-all
    disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0
    outline-none rounded-action-1 font-nexa-extra-bold leading-[120%] hover:cursor-pointer w-fit
    disabled:bg-opacity-50 focus-visible:outline-solid focus-visible:outline-3 focus-visible:outline-offset-3
  `,
    {
      variants: {
        size: {
          [buttonSizeProps.XXSMALL]:
            'h-6 min-w-16 py-0 px-2 text-[12px] gap-1',
          [buttonSizeProps.XSMALL]:
            'h-8 min-w-20 px-2.5 text-[14px] gap-1.5',
          [buttonSizeProps.SMALL]:
            'h-10 min-w-24 px-4 text-[18px] gap-2',
          [buttonSizeProps.MEDIUM]:
            'h-14 min-w-32 px-5 text-[20px] gap-3.5',
          [buttonSizeProps.LARGE]:
            'h-16 min-w-36 px-6 text-[24px] gap-4',
        },
        variant: {
          [buttonVariantProps.DEFAULT]: `
          bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active
          `,
          [buttonVariantProps.SECONDARY]: `
          bg-fill-medium text-foreground-high
          hover:bg-fill-medium-hover active:bg-fill-medium-active
          `,
          [buttonVariantProps.OUTLINE]: `
          border hover:border-[1px] active:border-[2px] border-border-medium text-foreground-high
          hover:bg-transparent-hover active:bg-transparent-active
          `,
          [buttonVariantProps.GHOST]: `
          text-foreground-high hover:bg-transparent-hover active:bg-transparent-active
          `,
          [buttonVariantProps.DESTRUCTIVE]: `
          border hover:border-[1px] active:border-[2px] text-danger-text
          hover:bg-transparent-hover active:bg-transparent-active
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
            buttonVariantProps.DEFAULT,
          inverse: true,
          className:
            'bg-primary text-primary-foreground',
        },
        {
          variant:
            buttonVariantProps.OUTLINE,
          inverse: true,
          className:
            'border hover:border-[1px] hover:bg-inv-transparent-hover active:bg-inv-transparent-active active:border-[2px] border-inv-border-medium text-inv-foreground-high',
        },
        {
          variant:
            buttonVariantProps.SECONDARY,
          inverse: true,
          className:
            'bg-inv-fill-medium text-inv-foreground-high hover:bg-inv-fill-medium-hover active:bg-inv-fill-medium-active',
        },
        {
          variant:
            buttonVariantProps.GHOST,
          inverse: true,
          className:
            'text-inv-foreground-high hover:bg-inv-transparent-hover active:bg-inv-transparent-active',
        },
        {
          variant:
            buttonVariantProps.DESTRUCTIVE,
          inverse: true,
          className:
            'border hover:border-[1px] active:border-[2px] border-inv-danger text-inv-danger-text hover:bg-inv-transparent-hover active:bg-inv-transparent-active',
        },
      ],
      defaultVariants: {
        size: buttonSizeProps.SMALL,
        loading: false,
        variant:
          buttonVariantProps.DEFAULT,
        inverse: false,
      },
    },
  )
