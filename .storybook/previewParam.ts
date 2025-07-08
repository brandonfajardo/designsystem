import { docs } from './docs'
import { storySort } from './sort'

export const previewParam = {
  options: {
    // Sort stories on the left sidebar
    storySort,
  },
  controls: {
    matchers: {
      color:
        /(background|color)$/i,
      date: /Date$/i,
    },
  },
  backgrounds: {
    options: {
      dark: {
        name: 'Dark',
        value: '#021934',
      },
      light: {
        name: 'Light',
        value: '#FFF',
      },
    },
  },
  actions: {
    disable: true,
  },
  visualTests: {
    disable: true,
  },
  a11y: {
    disable: true,
  },
  viewMode: 'docs',
  docs,
  layout: 'centered',
  panelPosition: 'right',
}
