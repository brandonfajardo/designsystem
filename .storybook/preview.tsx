import type { Preview } from '@storybook/react-vite'
import '../packages/aurora/src/theme.css'
import { darkMode } from './globalTypes/darkMode'
import { decorators } from './decorators'
import { previewParam } from './previewParam'

const preview: Preview = {
  decorators,
  parameters: previewParam,
  globalTypes: {
    darkMode,
    stylesheets: {
      name: 'Theme',
      themes: [
        {
          id: 'primary-theme',
          title:
            'Primary theme',
          url: '../packages/aurora/src/theme.css',
        },
        {
          id: 'secondary-theme',
          title:
            'Secondary theme',
          url: '../packages/aurora/src/theme2.css',
        },
      ],
    },
  },
}

export default preview
