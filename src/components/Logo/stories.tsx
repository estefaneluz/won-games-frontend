import { Meta, StoryObj } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
} as Meta

type Story = StoryObj<typeof Logo>

export const Default: Story = {}
