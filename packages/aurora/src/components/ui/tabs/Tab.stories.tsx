import {
  Tabs,
  TabsList,
} from './tab'
import { TabsTrigger } from './TabTrigger'
import { TabsContent } from './TabContent'
import type {
  Meta,
  StoryObj,
} from '@storybook/react-vite'
import TabDocumentation from './TabDocumentation.mdx'
import {
  tabListSizeProps,
  tabListVariantProps,
  tabTriggerSizeProps,
  tabTriggerVariantProps,
} from './TabPropsConst'

const tabListSizes = [
  tabListSizeProps.SMALL,
  tabListSizeProps.MEDIUM,
  tabListSizeProps.LARGE,
]

const tabListVariants = [
  tabListVariantProps.SIMPLE,
  tabListVariantProps.BOTTOM_BORDER,
  tabListVariantProps.FILL,
  tabListVariantProps.OUTLINE,
]

const tabTriggerSizes = [
  tabTriggerSizeProps.SMALL,
  tabTriggerSizeProps.MEDIUM,
  tabTriggerSizeProps.LARGE,
]

const tabTriggerVariants = [
  tabTriggerVariantProps.OUTLINE,
  tabTriggerVariantProps.FILL,
]

const meta: Meta<
  typeof Tabs
> = {
  title:
    'Global Components/Tab',
  component: Tabs,
  subcomponents: {
    TabsList,
    TabsTrigger,
    TabsContent,
  },
  tags: ['autodocs', '!dev'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=12129-44723&t=aUhroMWMIYVxUfHr-4',
    },
    docs: {
      description: {
        component: 'Tab',
      },
      page: TabDocumentation,
    },
    designDocumentation: {
      url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=20680-87269&m=dev',
    },
  },
  argTypes: {},
  args: {},
}

type Story = StoryObj<
  typeof Tabs
>

export const Variants: Story =
  {
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=1682-58487&t=aUhroMWMIYVxUfHr-4',
      },
    },
    render: (args) => (
      <div className="flex flex-col gap-12">
        <Tabs {...args}>
          <TabsList
            variant={
              tabListVariantProps.SIMPLE
            }
            size={
              tabListSizeProps.LARGE
            }
          >
            {Array.from({
              length: 10,
            }).map(
              (_, index) => (
                <TabsTrigger
                  value={`tab${index + 1}`}
                  variant={
                    tabTriggerVariantProps.OUTLINE
                  }
                  size={
                    tabTriggerSizeProps.LARGE
                  }
                >
                  Tab
                </TabsTrigger>
              ),
            )}
          </TabsList>
        </Tabs>

        <Tabs {...args}>
          <TabsList
            variant={
              tabListVariantProps.BOTTOM_BORDER
            }
            size={
              tabListSizeProps.LARGE
            }
          >
            {Array.from({
              length: 10,
            }).map(
              (_, index) => (
                <TabsTrigger
                  value={`tab${index + 1}`}
                  variant={
                    tabTriggerVariantProps.OUTLINE
                  }
                  size={
                    tabTriggerSizeProps.LARGE
                  }
                >
                  Tab
                </TabsTrigger>
              ),
            )}
          </TabsList>
        </Tabs>

        <Tabs {...args}>
          <TabsList
            variant={
              tabListVariantProps.OUTLINE
            }
            size={
              tabListSizeProps.LARGE
            }
          >
            {Array.from({
              length: 10,
            }).map(
              (_, index) => (
                <TabsTrigger
                  value={`tab${index + 1}`}
                  variant={
                    tabTriggerVariantProps.FILL
                  }
                  size={
                    tabTriggerSizeProps.LARGE
                  }
                >
                  Tab
                </TabsTrigger>
              ),
            )}
          </TabsList>
        </Tabs>

        <Tabs {...args}>
          <TabsList
            variant={
              tabListVariantProps.FILL
            }
            size={
              tabListSizeProps.LARGE
            }
          >
            {Array.from({
              length: 10,
            }).map(
              (_, index) => (
                <TabsTrigger
                  value={`tab${index + 1}`}
                  variant={
                    tabTriggerVariantProps.FILL
                  }
                  size={
                    tabTriggerSizeProps.LARGE
                  }
                >
                  Tab
                </TabsTrigger>
              ),
            )}
          </TabsList>
        </Tabs>
      </div>
    ),
  }

export default meta
