import { cva } from 'class-variance-authority'
import {
  tabListSizeProps,
  tabListVariantProps,
  tabTriggerSizeProps,
  tabTriggerVariantProps,
} from './TabPropsConst'

export const tabRootVariants =
  cva(
    `
    flex flex-col gap-2
  `,
  )

export const tabListVariants =
  cva(
    `
    inline-flex w-fit items-center justify-center
  `,
    {
      variants: {
        variant: {
          [tabListVariantProps.SIMPLE]:
            '',
          [tabListVariantProps.BOTTOM_BORDER]:
            'border-b border-border-low',
          [tabListVariantProps.FILL]:
            'rounded-action-1 gap-1 bg-fill-low p-1',
          [tabListVariantProps.OUTLINE]:
            'rounded-action-1 gap-1 p-1 border border-border-low',
        },
        size: {
          [tabListSizeProps.SMALL]:
            '',
          [tabListSizeProps.MEDIUM]:
            '',
          [tabListSizeProps.LARGE]:
            '',
        },
        inverse: {
          true: '',
        },
      },
      defaultVariants: {
        variant:
          tabListVariantProps.OUTLINE,
        size: tabListSizeProps.MEDIUM,
        inverse: false,
      },
      compoundVariants: [
        {
          variant:
            tabListVariantProps.FILL,
          inverse: true,
          className: `
            bg-inv-fill-low
            `,
        },
      ],
    },
  )

export const tabTriggerVariants =
  cva(
    `
    inline-flex flex-1 items-center justify-center px-2 py-1
    text-foreground text-sm font-medium text-foreground-medium
    whitespace-nowrap transition-[color,box-shadow]
    cursor-pointer
    disabled:pointer-events-none disabled:text-foreground-medium disabled:opacity-50 disabled:cursor-not-allowed
    [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4
    hover:bg-transparent-hover
    font-nexa-extra-bold font-extrabold
  `,
    {
      variants: {
        variant: {
          [tabTriggerVariantProps.OUTLINE]: `
          data-[state=active]:border-b-primary
          data-[state=active]:text-accent
          focus-visible:outline-focus
          focus-visible:outline-solid focus-visible:outline-3 focus-visible:outline-offset-3
          `,
          [tabTriggerVariantProps.FILL]: `
            bg-transparent rounded-action-1
            data-[state=active]:bg-accent data-[state=active]:text-accent-foreground
            focus-visible:outline-focus focus-visible:outline-solid focus-visible:outline-3 focus-visible:outline-offset-3
            `,
        },
        size: {
          [tabTriggerSizeProps.SMALL]:
            'text-[12px] h-6 min-w-14 data-[state=active]:border-b-2 gap-1 px-2',
          [tabTriggerSizeProps.MEDIUM]:
            'text-[14px] h-8 min-w-16 data-[state=active]:border-b-3 gap-1.5 px-2.5',
          [tabTriggerSizeProps.LARGE]:
            'text-[18px] h-10 min-w-20 data-[state=active]:border-b-4 gap-2 px-4',
        },
        inverse: {
          true: '',
        },
      },
      defaultVariants: {
        variant:
          tabTriggerVariantProps.FILL,
        size: tabTriggerSizeProps.MEDIUM,
        inverse: false,
      },
      compoundVariants: [
        {
          variant:
            tabTriggerVariantProps.OUTLINE,
          inverse: true,
          className: `
            data-[state=active]:text-inv-accent
            text-inv-foreground-medium bg-inv-transparent hover:bg-inv-transparent-hover
            `,
        },
        {
          variant:
            tabTriggerVariantProps.FILL,
          inverse: true,
          className: `
            data-[state=active]:bg-inv-accent data-[state=active]:text-inv-accent-foreground
            text-inv-foreground-medium bg-inv-transparent hover:bg-inv-transparent-hover
            disabled:text-inv-foreground-medium
            `,
        },
      ],
    },
  )

export const tabContentVariants =
  cva(
    `
    flex-1 outline-none
    text-foreground-high
  `,
    {
      variants: {
        inverse: {
          true: 'text-inv-foreground-high',
        },
      },
      defaultVariants: {
        inverse: false,
      },
    },
  )
