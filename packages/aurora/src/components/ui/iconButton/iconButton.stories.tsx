import { IconButton } from '@/components/ui/iconButton/IconButton'
import type { iconButtonProps } from './iconButtonTypes'
import Icon from '@/components/ui/IconWrapper/Icon'

import type {
  Meta,
  StoryObj,
} from '@storybook/react-vite'
import IconButtonDocumentation from './iconButtonDocumentation.mdx'
import {
  iconButtonSizeProps,
  iconButtonVariantProps,
} from './iconButtonPropsConst'

const sizes = [
  iconButtonSizeProps.XXSMALL,
  iconButtonSizeProps.XSMALL,
  iconButtonSizeProps.SMALL,
  iconButtonSizeProps.MEDIUM,
  iconButtonSizeProps.LARGE,
]

const variants = [
  iconButtonVariantProps.DEFAULT,
  iconButtonVariantProps.SECONDARY,
  iconButtonVariantProps.OUTLINE,
  iconButtonVariantProps.GHOST,
]

const meta: Meta<
  typeof IconButton
> = {
  title:
    'Global Components/IconButton',
  component: IconButton,
  tags: ['autodocs', '!dev'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=12129-44723&t=aUhroMWMIYVxUfHr-4',
    },
    docs: {
      description: {
        component:
          'IconButton',
      },
      page: IconButtonDocumentation,
    },
    designDocumentation: {
      url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=20680-87269&m=dev',
    },
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: [
        iconButtonSizeProps.XXSMALL,
        iconButtonSizeProps.XSMALL,
        iconButtonSizeProps.SMALL,
        iconButtonSizeProps.MEDIUM,
        iconButtonSizeProps.LARGE,
      ],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: [
        iconButtonVariantProps.DEFAULT,
        iconButtonVariantProps.SECONDARY,
        iconButtonVariantProps.OUTLINE,
        iconButtonVariantProps.GHOST,
      ],
    },
    icon: {
      control: {
        type: 'object',
      },
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    inverse: {
      control: 'boolean',
    },
    asChild: {
      control: 'boolean',
    },
    onClick: {
      action: 'onClick',
    },
  },
  args: {
    size: undefined,
    variant: undefined,
    loading: false,
    disabled: false,
    asChild: false,
    inverse: false,
    icon: (
      <Icon name="Atom" />
    ),
    onClick: () => {},
  },
}

type Story =
  StoryObj<iconButtonProps>

export const Default: Story =
  {
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=1682-58487&t=aUhroMWMIYVxUfHr-4',
      },
    },
  }

export const Loading: Story =
  {
    args: {
      loading: true,
    },
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=8781-13214&m=dev',
      },
    },
  }

export const Inverse: Story =
  {
    args: {
      inverse: true,
    },
    decorators: [
      (Story) => (
        <div className="bg-[#021934] p-6 rounded">
          <Story />
        </div>
      ),
    ],
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=22601-28684&m=dev',
      },
    },
    globals: {
      backgrounds: {
        value: 'dark',
      },
    },
  }

export const Variants: Story =
  {
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=12129-44723&m=dev',
      },
    },
    render: (args) => (
      <div className="flex flex-row gap-8 items-center">
        {variants.map(
          (variant) => (
            <IconButton
              key={variant}
              {...args}
              variant={
                variant as iconButtonVariantProps
              }
            >
              Button
            </IconButton>
          ),
        )}
      </div>
    ),
  }

export const Sizes: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=12129-44723&m=dev',
    },
  },
  render: (args) => (
    <div className="flex flex-row gap-8 items-center">
      {sizes.map((size) => (
        <IconButton
          key={size}
          {...args}
          size={
            size as iconButtonSizeProps
          }
        >
          Button
        </IconButton>
      ))}
    </div>
  ),
}

export default meta
