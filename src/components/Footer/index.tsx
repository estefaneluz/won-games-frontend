import Link from 'next/link'
import Heading from '../Heading'
import Logo from '../Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />

    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineColor="secondary" lineBottom>
          Contact us
        </Heading>

        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineColor="secondary" lineBottom>
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>

          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineColor="secondary" lineBottom>
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
          <Link href="/games" legacyBehavior>
            <a>Store</a>
          </Link>
          <Link href="/search" legacyBehavior>
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineColor="secondary" lineBottom>
          Location
        </Heading>

        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Won Games 2023 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
