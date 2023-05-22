import { Meta, StoryObj } from '@storybook/react'
import Button from '.'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

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
    children: 'Buy now'
  }
}

export const withIcon: Story = {
  args: {
    size: 'small',
    children: 'Buy now',
    icon: <AddShoppingCart />
  }
}

export const asIcon: Story = {
  args: {
    size: 'large',
    children: 'Buy now',
    as: 'a',
    href: '/link'
  }
}
