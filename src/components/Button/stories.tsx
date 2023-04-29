import { Meta, StoryObj } from '@storybook/react'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Buy Now'
  }
}
