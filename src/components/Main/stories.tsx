import Main from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

type Story = StoryObj<typeof Main>

export const Basic: Story = {}
