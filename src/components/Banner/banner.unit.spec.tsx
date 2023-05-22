import { screen } from '@testing-library/react'

import Banner, { BannerProps } from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Banner />', () => {
  const bannerProps = {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <string>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  } as BannerProps

  it('should render correctly', () => {
    renderWithTheme(<Banner {...bannerProps} />)

    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()

    const img = screen.getByRole('img', { name: /Defy death/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', bannerProps.img)
  })
})
