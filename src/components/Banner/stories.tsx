import { Meta, StoryObj } from '@storybook/react'
import Banner from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <string>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
} as Meta

type Story = StoryObj<typeof Banner>

export const Default: Story = {}
