import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig =
  {
    stories: [
      '../packages/aurora/src/components/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
      '@storybook/addon-designs',
      '@storybook/addon-docs',
      '@storybook/addon-onboarding',
      '@storybook/addon-vitest',
      'storybook-theme-switch-addon',
    ],
    framework: {
      name: '@storybook/react-vite',
      options: {},
    },
    docs: {
      defaultName: 'Overview',
    },
  }
export default config
