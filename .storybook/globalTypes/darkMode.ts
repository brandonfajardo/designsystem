export const darkMode = {
  name: 'Dark Mode',
  title: 'Dark Mode',
  description:
    'Enable dark mode for components',
  defaultValue: 'light',
  toolbar: {
    icon: 'circlehollow',
    items: [
      {
        value: 'light',
        title: 'Light',
      },
      {
        value: 'dark',
        title: 'Dark',
      },
    ],
    showName: true,
  },
}
