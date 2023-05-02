import { Meta, StoryObj } from '@storybook/react'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen'
  },
  background: {
    default: 'dark'
  }
} as Meta

type Story = StoryObj<typeof Menu>

export const Default: Story = {}
