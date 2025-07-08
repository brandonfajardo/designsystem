import type {
  Meta,
  StoryObj,
} from '@storybook/react-vite'
import Icon from '@/components/ui/IconWrapper/Icon'

const meta = {
  title:
    'Global Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { type: 'string' },
    color: {
      control: {
        type: 'color',
      },
    },
    size: {
      control: {
        type: 'number',
      },
    },
    rotate: {
      control: {
        type: 'number',
      },
    },
    strokeWidth: {
      control: {
        type: 'number',
      },
    },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<
  typeof meta
>

export const Default: Story =
  {
    args: {
      name: 'Smile',
      size: 24,
      color: 'black',
    },
  }

export const RotatedIcon: Story =
  {
    args: {
      name: 'Heart',
      rotate: '90',
    },
  }

export const LargeIcon: Story =
  {
    args: {
      name: 'Heart',
      size: 128,
      color: 'primary',
    },
  }

export const LoadingIcon: Story =
  {
    args: {
      name: 'Loader2',
      size: 48,
      className:
        'animate-spin',
    },
  }
