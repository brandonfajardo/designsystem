import { Button } from '@/components/ui/button/Button'

import type {
  Meta,
  StoryObj,
} from '@storybook/react-vite'
import Icon from '@/components/ui/IconWrapper/Icon'
import {
  buttonSizeProps,
  buttonVariantProps,
} from './buttonPropsConst'

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
    'Global Components/Button/All Stories',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=12129-44723&t=aUhroMWMIYVxUfHr-4',
    },
    docs: {
      description: {
        component: 'Button',
      },
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

export default meta

type Story = StoryObj<
  typeof Button
>

export const Playground: Story =
  {
    args: {},
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

export const Disabled: Story =
  {
    args: {
      disabled: true,
    },
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=8781-13214&m=dev',
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

export const LeftIcon: Story =
  {
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=1682-58487&t=aUhroMWMIYVxUfHr-4',
      },
    },
    render: (args) => (
      <div className="flex flex-row gap-8 items-center">
        <Button
          {...args}
          leftIcon={
            <Icon name="Atom" />
          }
        >
          Button
        </Button>
      </div>
    ),
  }

export const RightIcon: Story =
  {
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=1682-58487&t=aUhroMWMIYVxUfHr-4',
      },
    },
    render: (args) => (
      <div className="flex flex-row gap-8 items-center">
        <Button
          {...args}
          rightIcon={
            <Icon name="Atom" />
          }
        >
          Button
        </Button>
      </div>
    ),
  }
