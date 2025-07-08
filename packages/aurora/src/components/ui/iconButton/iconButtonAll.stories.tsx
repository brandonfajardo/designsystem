import { IconButton } from '@/components/ui/iconButton/IconButton'

import type {
  Meta,
  StoryObj,
} from '@storybook/react-vite'
import {
  iconButtonSizeProps,
  iconButtonVariantProps,
} from './iconButtonPropsConst'
import Icon from '@/components/ui/IconWrapper/Icon'

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
    'Global Components/IconButton/All Stories',
  component: IconButton,
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
    },
    designDocumentation: {
      url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=22889-45545&m=dev',
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
    onClick: () => {},
  },
}

export default meta

type Story = StoryObj<
  typeof IconButton
>

export const Playground: Story =
  {
    args: {
      icon: (
        <Icon name="Atom" />
      ),
    },
  }

export const Sizes: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=12129-44723&m=dev',
    },
    designDocumentation: {
      url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=22889-45614&m=dev',
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
          icon={
            <Icon name="Atom" />
          }
        >
          Button
        </IconButton>
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
      designDocumentation: {
        url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=22889-45579&m=dev',
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
              icon={
                <Icon name="Atom" />
              }
            >
              Button
            </IconButton>
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
      designDocumentation: {
        url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=22889-45594&m=dev',
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
            icon={
              <Icon name="Atom" />
            }
          >
            Button
          </IconButton>
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
      designDocumentation: {
        url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=22889-45614&m=dev',
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
              icon={
                <Icon name="Atom" />
              }
            >
              Button
            </IconButton>
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
            <IconButton
              key={variant}
              {...args}
              variant={
                variant as iconButtonVariantProps
              }
              icon={
                <Icon name="Atom" />
              }
            >
              Button
            </IconButton>
          ),
        )}
      </div>
    ),
  }
