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
import Icon from '@/components/ui/IconWrapper/Icon'

const tabListSizes = [
  tabListSizeProps.SMALL,
  tabListSizeProps.MEDIUM,
  tabListSizeProps.LARGE,
]

const meta: Meta<
  typeof Tabs
> = {
  title:
    'Global Components/Tab/All Stories',
  component: Tabs,
  subcomponents: {
    TabsList,
    TabsTrigger,
    TabsContent,
  },
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
        url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=9934-21993&m=dev',
      },
      designDocumentation: {
        url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=20696-115495&m=dev',
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
                >
                  Tab
                </TabsTrigger>
              ),
            )}
          </TabsList>
          {Array.from({
            length: 10,
          }).map(
            (_, index) => (
              <TabsContent
                value={`tab${index + 1}`}
              >
                <p>
                  Tab{' '}
                  {index + 1}
                </p>
              </TabsContent>
            ),
          )}
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
                >
                  Tab
                </TabsTrigger>
              ),
            )}
          </TabsList>
          {Array.from({
            length: 10,
          }).map(
            (_, index) => (
              <TabsContent
                value={`tab${index + 1}`}
              >
                <p>
                  Tab{' '}
                  {index + 1}
                </p>
              </TabsContent>
            ),
          )}
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
                >
                  Tab
                </TabsTrigger>
              ),
            )}
          </TabsList>
          {Array.from({
            length: 10,
          }).map(
            (_, index) => (
              <TabsContent
                value={`tab${index + 1}`}
              >
                <p>
                  Tab{' '}
                  {index + 1}
                </p>
              </TabsContent>
            ),
          )}
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
                >
                  Tab
                </TabsTrigger>
              ),
            )}
          </TabsList>
          {Array.from({
            length: 10,
          }).map(
            (_, index) => (
              <TabsContent
                value={`tab${index + 1}`}
              >
                <p>
                  Tab{' '}
                  {index + 1}
                </p>
              </TabsContent>
            ),
          )}
        </Tabs>
      </div>
    ),
  }

export const Sizes: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=9858-12274&m=dev',
    },
    designDocumentation: {
      url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=20696-115508&m=dev',
    },
  },
  render: (args) => (
    <div className="flex flex-col gap-12">
      {tabListSizes.map(
        (size) => (
          <Tabs {...args}>
            <TabsList
              variant={
                tabListVariantProps.SIMPLE
              }
              size={size}
            >
              {Array.from({
                length: 10,
              }).map(
                (
                  _,
                  index,
                ) => (
                  <TabsTrigger
                    value={`tab${index + 1}`}
                    variant={
                      tabTriggerVariantProps.OUTLINE
                    }
                  >
                    Tab
                  </TabsTrigger>
                ),
              )}
            </TabsList>
            {Array.from({
              length: 10,
            }).map(
              (_, index) => (
                <TabsContent
                  value={`tab${index + 1}`}
                >
                  <p>
                    Tab{' '}
                    {index +
                      1}
                  </p>
                </TabsContent>
              ),
            )}
          </Tabs>
        ),
      )}
    </div>
  ),
}

export const Icons: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=9858-12274&m=dev',
    },
    designDocumentation: {
      url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=20696-115508&m=dev',
    },
  },
  render: (args) => (
    <div className="flex flex-col gap-12">
      {tabListSizes.map(
        (size) => (
          <Tabs {...args}>
            <TabsList
              variant={
                tabListVariantProps.SIMPLE
              }
              size={size}
            >
              {Array.from({
                length: 10,
              }).map(
                (
                  _,
                  index,
                ) => (
                  <TabsTrigger
                    leftIcon={
                      <Icon name="Atom" />
                    }
                    rightIcon={
                      <Icon name="Atom" />
                    }
                    value={`tab${index + 1}`}
                    variant={
                      tabTriggerVariantProps.OUTLINE
                    }
                  >
                    Tab
                  </TabsTrigger>
                ),
              )}
            </TabsList>
            {Array.from({
              length: 10,
            }).map(
              (_, index) => (
                <TabsContent
                  value={`tab${index + 1}`}
                >
                  <p>
                    Tab{' '}
                    {index +
                      1}
                  </p>
                </TabsContent>
              ),
            )}
          </Tabs>
        ),
      )}
    </div>
  ),
}

export const Inverse: Story =
  {
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=23185-58190&m=dev',
      },
      designDocumentation: {
        url: 'https://www.figma.com/design/BTnW4QMdJsJyC0JtZ5LWif/AURORA-1.0?node-id=20696-115412&m=dev',
      },
    },
    decorators: [
      (Story) => (
        <div className="bg-[#021934] p-6 rounded">
          <Story />
        </div>
      ),
    ],
    globals: {
      backgrounds: {
        value: 'dark',
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
              tabListSizeProps.MEDIUM
            }
            inverse
          >
            {Array.from({
              length: 10,
            }).map(
              (_, index) => (
                <TabsTrigger
                  inverse
                  value={`tab${index + 1}`}
                  variant={
                    tabTriggerVariantProps.OUTLINE
                  }
                >
                  Tab
                </TabsTrigger>
              ),
            )}
          </TabsList>
          {Array.from({
            length: 10,
          }).map(
            (_, index) => (
              <TabsContent
                inverse
                value={`tab${index + 1}`}
              >
                <p>
                  Tab{' '}
                  {index + 1}
                </p>
              </TabsContent>
            ),
          )}
        </Tabs>

        <Tabs {...args}>
          <TabsList
            inverse
            variant={
              tabListVariantProps.BOTTOM_BORDER
            }
            size={
              tabListSizeProps.MEDIUM
            }
          >
            {Array.from({
              length: 10,
            }).map(
              (_, index) => (
                <TabsTrigger
                  inverse
                  value={`tab${index + 1}`}
                  variant={
                    tabTriggerVariantProps.OUTLINE
                  }
                >
                  Tab
                </TabsTrigger>
              ),
            )}
          </TabsList>
          {Array.from({
            length: 10,
          }).map(
            (_, index) => (
              <TabsContent
                inverse
                value={`tab${index + 1}`}
              >
                <p>
                  Tab{' '}
                  {index + 1}
                </p>
              </TabsContent>
            ),
          )}
        </Tabs>

        <Tabs {...args}>
          <TabsList
            inverse
            variant={
              tabListVariantProps.OUTLINE
            }
            size={
              tabListSizeProps.MEDIUM
            }
          >
            {Array.from({
              length: 10,
            }).map(
              (_, index) => (
                <TabsTrigger
                  inverse
                  value={`tab${index + 1}`}
                  variant={
                    tabTriggerVariantProps.FILL
                  }
                >
                  Tab
                </TabsTrigger>
              ),
            )}
          </TabsList>
          {Array.from({
            length: 10,
          }).map(
            (_, index) => (
              <TabsContent
                inverse
                value={`tab${index + 1}`}
              >
                <p>
                  Tab{' '}
                  {index + 1}
                </p>
              </TabsContent>
            ),
          )}
        </Tabs>

        <Tabs {...args}>
          <TabsList
            inverse
            variant={
              tabListVariantProps.FILL
            }
            size={
              tabListSizeProps.MEDIUM
            }
          >
            {Array.from({
              length: 10,
            }).map(
              (_, index) => (
                <TabsTrigger
                  inverse
                  value={`tab${index + 1}`}
                  variant={
                    tabTriggerVariantProps.FILL
                  }
                >
                  Tab
                </TabsTrigger>
              ),
            )}
          </TabsList>
          {Array.from({
            length: 10,
          }).map(
            (_, index) => (
              <TabsContent
                value={`tab${index + 1}`}
                inverse
              >
                Tab{' '}
                {index + 1}
              </TabsContent>
            ),
          )}
        </Tabs>
      </div>
    ),
  }
export default meta
