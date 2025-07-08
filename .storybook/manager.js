import { addons, types } from 'storybook/manager-api';
import React from 'react';
import { CustomAddonPanel } from './CustomAddonPanel';

// Storybook Config for Addon Panel
addons.setConfig({
  navSize: 300, // Left Sidebar Width
  rightPanelWidth: 700, // Right Sidebar Width
  panelPosition: 'right', // Addon Panel Position
  enableShortcuts: true, // Enable Keyboard Shortcuts
  showToolbar: true, // Show Toolbar on the top
  theme: undefined, // Theme
  selectedPanel: 'storybook/code/panel', // Selected Panel using the id of the panel
  initialActive: 'sidebar',
  layoutCustomisations: {
    showSidebar(state, defaultValue) {
      return state.storyId === 'landing' ? false : defaultValue;
    },
    showToolbar(state, defaultValue) {
      return state.viewMode === 'docs' ? false : defaultValue;
    },
  },
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: true },
    zoom: { hidden: true },
    eject: { hidden: true },
    copy: { hidden: true },
    fullscreen: { hidden: true },
  },
});

// Design Documentation Panel
addons.register('my/custom-addon', () => {
  addons.add('my/custom-addon/panel', {
    title: 'Design Documentation',
    type: types.PANEL,
    render: ({ active, key }) => {
      return React.createElement(CustomAddonPanel, {
        active: active,
        key: key,
        title: 'designDocumentation',
      });
    },
  });
});
