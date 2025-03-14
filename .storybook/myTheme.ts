import { create } from '@storybook/theming';

export default create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'The Hatching Storybook',
  brandUrl: 'https://hatchingwonders.com',
  brandImage: 'https://i.ibb.co/dMg9sGV/Size-Tiny.png',
  brandTarget: '_self',

  //
  colorPrimary: '#3A10E5',
  colorSecondary: '#F3607B',

  // UI
  appBg: '#FFC940',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#F3607B',
  appBorderRadius: 6,

  // Text colors
  textColor: '#ffffff',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#F3607B',
  barSelectedColor: '#F3607B',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#F3607B',
  inputTextColor: '#F3607B',
  inputBorderRadius: 6,
});