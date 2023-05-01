import {HeaderStyled, Author, Title} from  './styles/Header.styled'
import {Flex} from './styles/Flex.styled'
import {Button} from './styles/Button.styled'
import {useTheme} from 'styled-components'
import Link from 'next/link'

function Header({ title, back, children, shadowSize }) {
  const theme = useTheme()

  return (
      <HeaderStyled shadowSize={shadowSize}>
        <Flex>
            <Link href={back}>
              <a>
                <Button bg={theme.colors.tertiaryHalf} borderColor={theme.colors.tertiary}  color={theme.colors.tertiary}>Atpakaļ</Button>
              </a>
            </Link>


            <Title>{title}</Title>

            <Author>Matīss Burmistrs un Edžus Meirāns 11.D</Author>
        </Flex>
        {children}
      </HeaderStyled>
  )
}

Header.defaultProps = {
  back: '/'
}

export default Header