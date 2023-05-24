import { Meta, StoryObj } from '@storybook/react'
import Banner from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

type Story = StoryObj<typeof Banner>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Banner {...args} />
    </div>
  )
}

export const WithRibbon: Story = {
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Banner {...args} />
    </div>
  )
}

WithRibbon.args = {
  ribbon: 'My ribbon',
  ribbonColor: 'secondary',
  ribbonSize: 'small'
}
