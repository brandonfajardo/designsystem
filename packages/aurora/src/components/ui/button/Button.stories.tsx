import { Button } from '@/components/ui/button/Button'
import type { ButtonProps } from './ButtonTypes'

import type {
  Meta,
  StoryObj,
} from '@storybook/react-vite'
import ButtonDocumentation from './ButtonDocumentation.mdx'
import {
  buttonSizeProps,
  buttonVariantProps,
} from './ButtonPropsConst'
import Icon from '../IconWrapper/Icon'

const sizes = [
  buttonSizeProps.XXSMALL,
  buttonSizeProps.XSMALL,
  buttonSizeProps.SMALL,
  buttonSizeProps.MEDIUM,
  buttonSizeProps.LARGE,
]

const variants = [
  buttonVariantProps.DEFAULT,
  buttonVariantProps.SECONDARY,
  buttonVariantProps.OUTLINE,
  buttonVariantProps.GHOST,
  buttonVariantProps.DESTRUCTIVE,
]

const meta: Meta<
  typeof Button
> = {
  title:
    'Global Components/Button',
  component: Button,
  tags: ['autodocs', '!dev'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=12129-44723&t=aUhroMWMIYVxUfHr-4',
    },
    docs: {
      description: {
        component: 'Button',
      },
      page: ButtonDocumentation,
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
        buttonSizeProps.XXSMALL,
        buttonSizeProps.XSMALL,
        buttonSizeProps.SMALL,
        buttonSizeProps.MEDIUM,
        buttonSizeProps.LARGE,
      ],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: [
        buttonVariantProps.DEFAULT,
        buttonVariantProps.SECONDARY,
        buttonVariantProps.OUTLINE,
        buttonVariantProps.GHOST,
        buttonVariantProps.DESTRUCTIVE,
      ],
    },
    leftIcon: {
      control: {
        type: 'object',
      },
    },
    rightIcon: {
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
    children: {
      control: 'text',
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
    children: 'Button',
    inverse: false,
    leftIcon: undefined,
    rightIcon: undefined,
    onClick: () => {},
  },
}

type Story =
  StoryObj<ButtonProps>

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

export const Danger: Story = {
  args: {
    variant:
      buttonVariantProps.DESTRUCTIVE,
    size: buttonSizeProps.MEDIUM,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=1683-60712&m=dev',
    },
  },
}

export const Inverse: Story =
  {
    args: {
      inverse: true,
      variant:
        buttonVariantProps.DESTRUCTIVE,
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

export const LeftIcon: Story =
  {
    args: {
      leftIcon: (
        <Icon name="Atom" />
      ),
    },
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=1682-58487&t=aUhroMWMIYVxUfHr-4',
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
            <Button
              key={variant}
              {...args}
              variant={
                variant as buttonVariantProps
              }
            >
              Button
            </Button>
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
        <Button
          key={size}
          {...args}
          size={
            size as buttonSizeProps
          }
        >
          Button
        </Button>
      ))}
    </div>
  ),
}

export default meta
