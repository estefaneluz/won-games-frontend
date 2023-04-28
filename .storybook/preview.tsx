import { RouterContext } from 'next/dist/shared/lib/router-context'
import type { Preview, StoryFn } from '@storybook/react'
import GlobalStyles from '../src/styles/global';
import React from 'react';

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
      <>
        <GlobalStyles />
        <Story />
      </>
    )
  ],
}

export default preview
