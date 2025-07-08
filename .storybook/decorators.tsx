import React from 'react'

export const decorators = [
  (Story, context) => {
    const isDarkTheme =
      context.globals
        .darkMode === 'dark'
    return (
      <div
        className={
          isDarkTheme
            ? 'dark bg-gray-900'
            : ''
        }
      >
        <Story />
      </div>
    )
  },
]
