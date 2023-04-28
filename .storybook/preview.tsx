import { RouterContext } from 'next/dist/shared/lib/router-context'
import type { Preview, StoryFn } from '@storybook/react'
import GlobalStyles from '../src/styles/global';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    nextRouter: {
      Provider: RouterContext.Provider
    }
  },
  decorators: [
    (Story: StoryFn) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    )
  ],
}

export default preview
